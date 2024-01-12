from rest_framework import viewsets
from .serializers import RegisterSerializer
from django.contrib.auth.models import User
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
from . import forms

# Create your views here.

class RegisterView(viewsets.ModelViewSet):
    serializer_class = RegisterSerializer
    queryset = User.objects.all()

class ProfileView(DetailView):
    model = Post


# class SignUpView(SuccessMessageMixin, CreateView):
#   template_name = 'user/register.html'
#   success_url = reverse_lazy('login')
#   form_class = UserRegisterForm
#   success_message = "Your profile was created successfully"
