# -*- coding: utf-8 -*-
# Generated by Django 1.10.8 on 2017-12-21 03:54
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('dayAddApi', '0009_auto_20171207_1450'),
    ]

    operations = [
        migrations.CreateModel(
            name='FlowPaidMoney',
            fields=[
                ('paidMoney', models.IntegerField(default=0)),
                ('createDate', models.DateField(default=django.utils.timezone.now, primary_key=True, serialize=False)),
            ],
            options={
                'ordering': ('createDate',),
            },
        ),
    ]
