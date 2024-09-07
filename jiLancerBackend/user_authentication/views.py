from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import RegisterSerializer

from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

from django.http import JsonResponse
from django.contrib.auth.decorators import login_required

from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated

class RegisterView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@csrf_exempt
def login_user(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')

        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            print("Login successful")
            return JsonResponse({"message": "Login successful"}, status=200)
        else:
            print("Login unsuccessful")
            return JsonResponse({"error": "Invalid credentials"}, status=400)
    else:
        print("Login tak to gaya he nahi")
        return JsonResponse({"error": "Invalid request method"}, status=405)

@csrf_exempt
def logout_user(request):
    if request.method == 'POST':
        logout(request)
        return JsonResponse({"message": "Logout successful"}, status=200)
    else:
        return JsonResponse({"error": "Invalid request method"}, status=405)

@api_view(['GET'])
def user_status(request):
    if request.user.is_authenticated:
        return Response({
            'is_authenticated': True,
            'username': request.user.username,
        })
    else:
        return Response({'is_authenticated': False})