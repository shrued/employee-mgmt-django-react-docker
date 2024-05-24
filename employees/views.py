from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Employee
import csv
import io

# View to render React frontend
def index(request):
    return render(request, 'frontend/index.html')

# GET all employees
def get_employees(request):
    employees = Employee.objects.all()
    data = [
        {
            'id': employee.id,
            'first_name': employee.first_name,
            'last_name': employee.last_name,
            'email': employee.email,
            'status': employee.status
        }
        for employee in employees
    ]
    return JsonResponse(data, safe=False)

# POST new employee
@csrf_exempt
def add_employee(request):
    if request.method == 'POST':
        data = request.POST.dict() # Convert to standard dict
        employee = Employee.objects.create(
            first_name=data['firstName'],  
            last_name=data['lastName'],
            email=data['email'],
            status=data['status']
        )
        return JsonResponse({'id': employee.id, 'success': True})
    else:
        return JsonResponse({'success': False, 'error': 'Invalid request method'})

# POST update existing employee
@csrf_exempt
def update_employee(request, employee_id):
    if request.method == 'POST':
        data = request.POST.dict() # Convert to standard dict
        employee = Employee.objects.get(id=employee_id)
        
        employee.status = data['status'] 
        employee.save()

        return JsonResponse({'success': True, 'status': employee.status})
    else:
        return JsonResponse({'success': False, 'error': 'Invalid request method'})

# POST delete an existing employee
@csrf_exempt
def delete_employee(request, employee_id):
    if request.method == 'POST':
        employee = Employee.objects.get(id=employee_id)
        employee.delete()
        return JsonResponse({'success': True})
    else:
        return JsonResponse({'success': False, 'error': 'Invalid request method'})

# POST import CSV file
@csrf_exempt
def import_csv(request):
    if request.method == 'POST' and request.FILES['csv_file']:
        csv_file = request.FILES['csv_file']
        decoded_file = csv_file.read().decode('utf-8-sig')  # Decode with utf-8-sig
        reader = csv.DictReader(io.StringIO(decoded_file))

        for row in reader:
            employee, created = Employee.objects.update_or_create(
                email=row['email'],
                defaults={'first_name': row['first_name'], 'last_name': row['last_name'], 'status': row['status']}
            )

        return JsonResponse({'success': True, 'message': 'CSV import successful'})  

    return JsonResponse({'success': False, 'error': 'Invalid request or missing CSV file'})
