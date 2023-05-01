# Generated by Django 4.2 on 2023-04-29 05:18

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('authentication', '0002_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='TicketModel',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now=True)),
                ('updated_at', models.DateTimeField(auto_now_add=True)),
                ('name', models.CharField(max_length=50)),
                ('img', models.ImageField(upload_to='ticket')),
                ('price', models.PositiveIntegerField(default=200)),
                ('is_active', models.BooleanField(default=False)),
            ],
            options={
                'db_table': 'tickets',
            },
        ),
        migrations.CreateModel(
            name='PassesModel',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now=True)),
                ('updated_at', models.DateTimeField(auto_now_add=True)),
                ('is_paid', models.BooleanField(default=False)),
                ('order_id', models.CharField(blank=True, max_length=100, null=True)),
                ('payment_id', models.CharField(blank=True, max_length=100, null=True)),
                ('payment_signature', models.CharField(blank=True, max_length=100, null=True)),
                ('ticket', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='buy_ticket', to='tickets.ticketmodel')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user_pass', to='authentication.usermodel')),
            ],
            options={
                'db_table': 'passes',
            },
        ),
    ]
