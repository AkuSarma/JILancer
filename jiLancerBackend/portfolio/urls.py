from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from .views import FreelancerCreateView, FreelancerUpdateView, FreelancerDeleteView
from .views import EmployerCreateView, EmployerUpdateView, EmployerDeleteView

urlpatterns = [
    # Freelancer URLs
    path('freelancers/', FreelancerCreateView.as_view(), name='freelancer-create'),
    path('freelancers/<int:pk>/edit/', FreelancerUpdateView.as_view(), name='freelancer-edit'),
    path('freelancers/<int:pk>/delete/', FreelancerDeleteView.as_view(), name='freelancer-delete'),

    # Employer URLs
    path('employers/', EmployerCreateView.as_view(), name='employer-create'),
    path('employers/<int:pk>/edit/', EmployerUpdateView.as_view(), name='employer-edit'),
    path('employers/<int:pk>/delete/', EmployerDeleteView.as_view(), name='employer-delete'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)