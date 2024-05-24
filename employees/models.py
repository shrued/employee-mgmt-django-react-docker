from django.db import models

class Employee(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    status = models.CharField(max_length=10, choices=[('current', 'Current'), ('former', 'Former')], default='current')

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
