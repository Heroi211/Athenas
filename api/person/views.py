from django.shortcuts import render
from django.http import JsonResponse
from person.models import Person

# Create your views here.
def calcular_peso_ideal(request, pk):
    try:
        person = Person.objects.get(pk=pk)
        peso_ideal = person.calcularPesoIdeal()
        return JsonResponse({'peso_ideal': peso_ideal})
    except Person.DoesNotExist:
        return JsonResponse({'error': 'Person not found'}, status=404)