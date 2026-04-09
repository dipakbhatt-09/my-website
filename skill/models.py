from django.db import models

# Create your models here.

class SkillPageSkill(models.Model):
    name = models.CharField(max_length=50)
    level = models.PositiveIntegerField(
        default=50,
        help_text="Enter skill proficiency in % (0-100)"
    )
    icon = models.ImageField(
        upload_to='skills/icons/', blank=True, null=True
    )  # optional icon/image

    def __str__(self):
        return self.name