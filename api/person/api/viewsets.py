from rest_framework import viewsets
from person.api import serializers
from person import models

class PersonViewSet(viewsets.ModelViewSet):
  serializer_class = serializers.PersonSerializer
  queryset = models.Person.objects.all()