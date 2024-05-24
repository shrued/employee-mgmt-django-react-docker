from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_employees, name='get_employees'),
    path('add/', views.add_employee, name='add_employee'), 
    path('import/', views.import_csv, name='import_csv'),
    path('<int:employee_id>/update/', views.update_employee, name='update_employee'),
    path('<int:employee_id>/delete/', views.delete_employee, name='delete_employee'),
]