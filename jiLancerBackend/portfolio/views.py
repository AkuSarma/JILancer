from rest_framework import generics
from .models import Freelancer, Employer
from .serializers import FreelancerSerializer, EmployerSerializer

# Create a Freelancer
class FreelancerCreateView(generics.CreateAPIView):
    queryset = Freelancer.objects.all()
    serializer_class = FreelancerSerializer

# Edit a Freelancer
class FreelancerUpdateView(generics.UpdateAPIView):
    queryset = Freelancer.objects.all()
    serializer_class = FreelancerSerializer
    lookup_field = 'pk'  # Use 'pk' or 'id' to look up the object to be edited

# Delete a Freelancer
class FreelancerDeleteView(generics.DestroyAPIView):
    queryset = Freelancer.objects.all()
    serializer_class = FreelancerSerializer
    lookup_field = 'pk'  # Use 'pk' or 'id' to look up the object to be deleted

# Create an Employer
class EmployerCreateView(generics.CreateAPIView):
    queryset = Employer.objects.all()
    serializer_class = EmployerSerializer

# Edit an Employer
class EmployerUpdateView(generics.UpdateAPIView):
    queryset = Employer.objects.all()
    serializer_class = EmployerSerializer
    lookup_field = 'pk'  # Use 'pk' or 'id' to look up the object to be edited

# Delete an Employer
class EmployerDeleteView(generics.DestroyAPIView):
    queryset = Employer.objects.all()
    serializer_class = EmployerSerializer
    lookup_field = 'pk'  # Use 'pk' or 'id' to look up the object to be deleted
