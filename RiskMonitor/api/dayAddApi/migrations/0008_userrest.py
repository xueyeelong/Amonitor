# -*- coding: utf-8 -*-
# Generated by Django 1.10.8 on 2017-12-07 06:36
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('dayAddApi', '0007_flowloanfund'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserRest',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('registerDate', models.CharField(default=b'2017-12', max_length=32)),
                ('currentDate', models.CharField(default=b'2017-12', max_length=32)),
                ('allPass', models.IntegerField(default=0)),
                ('currentActive', models.IntegerField(default=0)),
                ('currentActiveRate', models.FloatField(default=0.0)),
                ('createDate', models.DateField(default=django.utils.timezone.now)),
            ],
            options={
                'ordering': ('createDate',),
            },
        ),
    ]
