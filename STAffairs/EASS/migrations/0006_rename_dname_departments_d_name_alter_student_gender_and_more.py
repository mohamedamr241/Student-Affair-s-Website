# Generated by Django 4.0.4 on 2022-05-20 22:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('EASS', '0005_alter_student_department'),
    ]

    operations = [
        migrations.RenameField(
            model_name='departments',
            old_name='Dname',
            new_name='D_name',
        ),
        migrations.AlterField(
            model_name='student',
            name='gender',
            field=models.CharField(choices=[('m', 'Male'), ('f', 'Female')], max_length=6),
        ),
        migrations.AlterField(
            model_name='student',
            name='level',
            field=models.CharField(choices=[('First', 'First Level'), ('Second', 'Second Level'), ('Third', 'Third Level'), ('Fourth', 'Fourth Level')], max_length=12),
        ),
        migrations.AlterField(
            model_name='student',
            name='status',
            field=models.CharField(choices=[('active', 'Active'), ('inactive', 'Inactive')], max_length=8),
        ),
        migrations.DeleteModel(
            name='Gender',
        ),
        migrations.DeleteModel(
            name='Level',
        ),
        migrations.DeleteModel(
            name='Status',
        ),
    ]