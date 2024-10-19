from django.urls import path
from .views import task_list, add_task, toggle_task, delete_task

urlpatterns = [
    path('', task_list, name='task_list'),
    path('add/', add_task, name='add_task'),
    path('toggle/<int:task_id>/', toggle_task, name='toggle_task'),  # Toggle task completion
    path('delete/<int:task_id>/', delete_task, name='delete_task'),  # New URL for deleting tasks
]