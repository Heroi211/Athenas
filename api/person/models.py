from django.db import models


# Create your models here.
class Person(models.Model):
    nome = models.CharField(max_length=100)
    data_nasc = models.DateField()
    cpf = models.CharField(
        max_length=14
    )  # Assume que o CPF tem 11 dígitos com 3 pontos e 1 traço
    SEXO_CHOICES = [("M", "Masculino"), ("F", "Feminino")]
    sexo = models.CharField(max_length=1, choices=SEXO_CHOICES)
    altura = models.FloatField()
    peso = models.FloatField()

    def __str__(self):
        return self.nome

    def calcularPesoIdeal(self):
        if self.sexo == "F":
            return (62.1 * self.altura) - 44.7
        return (72.7 * self.altura) - 58
