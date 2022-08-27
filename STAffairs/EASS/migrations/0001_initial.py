# Generated by Django 4.0.4 on 2022-05-20 18:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Departments',
            fields=[
                ('Dname', models.CharField(max_length=24, primary_key=True, serialize=False)),
            ],
        ),
        migrations.CreateModel(
            name='Gender',
            fields=[
                ('Tname', models.CharField(max_length=6, primary_key=True, serialize=False)),
            ],
        ),
        migrations.CreateModel(
            name='Level',
            fields=[
                ('LevelNumber', models.CharField(max_length=5, primary_key=True, serialize=False)),
            ],
        ),
        migrations.CreateModel(
            name='Status',
            fields=[
                ('Sname', models.CharField(max_length=8, primary_key=True, serialize=False)),
            ],
        ),
        migrations.CreateModel(
            name='Student',
            fields=[
                ('name', models.CharField(max_length=40)),
                ('ID', models.CharField(max_length=8, primary_key=True, serialize=False)),
                ('gpa', models.FloatField(default=0.0)),
                ('birthdate', models.DateField(blank=True, null=True)),
                ('phone_number', models.CharField(max_length=11)),
                ('email', models.EmailField(max_length=254)),
                ('department', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='EASS.departments')),
                ('gender', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='EASS.gender')),
                ('level', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='EASS.level')),
                ('status', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='EASS.status')),
            ],
        ),
    ]