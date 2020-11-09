from django.db import models


class UnitData(models.Model):
    """ユニット一覧
        名前
        攻撃　防御　反撃
        移動　攻撃距離　視野
        備考
        特殊１　特殊２　特殊３　特殊４
    """

    name = models.CharField(verbose_name='名前', max_length=50, unique=True)
    hp = models.IntegerField(verbose_name="HP", default=0)
    attack = models.IntegerField(verbose_name="攻撃", default=0)
    defence = models.IntegerField(verbose_name="防御", default=0)
    counter = models.IntegerField(verbose_name="反撃", default=0)
    move = models.IntegerField(verbose_name="移動", default=1)
    range = models.IntegerField(verbose_name="攻撃距離", default=1)
    site = models.IntegerField(verbose_name="視野", default=1)
    text = models.CharField(verbose_name='備考', max_length=50, default="普通のユニットです。")
    special1 = models.CharField(verbose_name='特殊1', max_length=50, blank=True, null=True, default="-")
    special2 = models.CharField(verbose_name='特殊2', max_length=50, blank=True, null=True, default="-")
    special3 = models.CharField(verbose_name='特殊3', max_length=50, blank=True, null=True, default="-")
    special4 = models.CharField(verbose_name='特殊4', max_length=50, blank=True, null=True, default="-")

    def __str__(self):
        return self.name
