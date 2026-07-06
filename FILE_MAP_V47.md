# V47 File Map

| الملف | مسؤوليته |
|---|---|
| `assets/js/01-core-base.js` | نواة التطبيق بعد حذف sync bridges القديمة وبعض client overrides القديمة |
| `assets/js/02-business-legacy.js` | منطق أعمال قديم متبقي يحتاج تنظيف لاحق |
| `assets/js/03-boot-calc-print.js` | الإقلاع والحسابات والطباعة |
| `assets/js/04-sync-import.js` | المزامنة والاستيراد الحالي |
| `assets/js/05-feature-patches.js` | فكسات الأوردرات والمستندات والإيصالات |
| `assets/js/06-data-protection-images-backup.js` | حماية الداتا + فصل الصور + Backup Center |
| `assets/js/07-clients-final.js` | المصدر الوحيد للعملاء |

## المرحلة التالية
V48: Error Log & Stability Layer، لإظهار الأخطاء داخل البرنامج بدل التهنيج أو الشاشة الفاضية.
