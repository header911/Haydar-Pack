# V42 Code Audit & Safe Cleanup Preparation
**القاعدة:** V41 Stable UI Fix.  
**هدف V42:** مراجعة وتنظيم خطة التنضيف بدون حذف كود وظيفي وبدون لمس Apps Script.
## نتيجة عامة
- إجمالي الملفات داخل نسخة GitHub: **48 ملف**.
- إجمالي حجم الحزمة غير مضغوط: **1032.9 KB**.
- إجمالي ملفات JavaScript: **20 ملف** بحجم **802.7 KB**.
- لم يتم حذف أي Feature في V42. التغيير العملي الوحيد هو تحديث رقم الكاش/النسخة + إضافة تقارير مراجعة.

## أكبر الملفات
| الملف | الحجم | ملاحظة |
|---|---:|---|
| `assets/js/01-core.js` | 539.6 KB | أكبر ملف ومصدر رئيسي للأكواد القديمة؛ يحتاج تفكيك تدريجي لا حذف مباشر. |
| `hp-logo-v3-512.png` | 47.5 KB | أيقونة/لوجو؛ ليس خطر على التشغيل. |
| `icon-512.png` | 47.5 KB | أيقونة/لوجو؛ ليس خطر على التشغيل. |
| `assets/css/styles.css` | 38.6 KB |  |
| `assets/js/12-sync-import.js` | 29.5 KB | ملف JavaScript يحتاج مراجعة اعتماديات قبل الدمج أو الحذف. |
| `hp-logo-v3-192.png` | 28.9 KB | أيقونة/لوجو؛ ليس خطر على التشغيل. |
| `icon-192.png` | 28.9 KB | أيقونة/لوجو؛ ليس خطر على التشغيل. |
| `index.html` | 25.3 KB |  |
| `assets/js/18-v41-backup-center-simple-ui.js` | 23.0 KB | ملف JavaScript يحتاج مراجعة اعتماديات قبل الدمج أو الحذف. |
| `assets/js/14-v35-fixes.js` | 21.0 KB | ملف JavaScript يحتاج مراجعة اعتماديات قبل الدمج أو الحذف. |
| `assets/js/08-doc-header-client-profit.js` | 20.3 KB | ملف JavaScript يحتاج مراجعة اعتماديات قبل الدمج أو الحذف. |
| `assets/js/04-finance-capital-docs.js` | 20.2 KB | ملف JavaScript يحتاج مراجعة اعتماديات قبل الدمج أو الحذف. |
| `assets/js/13-stage6-features.js` | 19.4 KB | ملف JavaScript يحتاج مراجعة اعتماديات قبل الدمج أو الحذف. |
| `assets/js/06-delete-doclogo-sync.js` | 19.2 KB | ملف JavaScript يحتاج مراجعة اعتماديات قبل الدمج أو الحذف. |
| `assets/js/17-v40-image-separation.js` | 17.6 KB | ملف JavaScript يحتاج مراجعة اعتماديات قبل الدمج أو الحذف. |

## مناطق التكرار الأكثر خطورة
هذه ليست أخطاء تشغيل حالية بالضرورة، لكنها مناطق لازم تتنضف لأنها سبب أغلب المشاكل السابقة.

### `renderClients`
- موجود/متأثر في **4 ملفات** وظهر في **5 مواضع**.
  - `assets/js/01-core.js` سطر 173
  - `assets/js/01-core.js` سطر 1604
  - `assets/js/07-doc-client-numbering.js` سطر 36
  - `assets/js/13-stage6-features.js` سطر 186
  - `assets/js/15-v36-feature-integrity.js` سطر 87

### `openClientDetail`
- موجود/متأثر في **6 ملفات** وظهر في **9 مواضع**.
  - `assets/js/01-core.js` سطر 185
  - `assets/js/01-core.js` سطر 885
  - `assets/js/01-core.js` سطر 1083
  - `assets/js/01-core.js` سطر 1193
  - `assets/js/03-client-edit.js` سطر 87
  - `assets/js/06-delete-doclogo-sync.js` سطر 73
  - `assets/js/08-doc-header-client-profit.js` سطر 41
  - `assets/js/13-stage6-features.js` سطر 222

### `openClientForm`
- موجود/متأثر في **4 ملفات** وظهر في **4 مواضع**.
  - `assets/js/03-client-edit.js` سطر 25
  - `assets/js/06-delete-doclogo-sync.js` سطر 80
  - `assets/js/13-stage6-features.js` سطر 228
  - `assets/js/15-v36-feature-integrity.js` سطر 132

### `deleteClient`
- موجود/متأثر في **4 ملفات** وظهر في **4 مواضع**.
  - `assets/js/06-delete-doclogo-sync.js` سطر 49
  - `assets/js/10-calculations.js` سطر 83
  - `assets/js/13-stage6-features.js` سطر 116
  - `assets/js/15-v36-feature-integrity.js` سطر 48

### `deleteOrder`
- موجود/متأثر في **5 ملفات** وظهر في **5 مواضع**.
  - `assets/js/01-core.js` سطر 101
  - `assets/js/06-delete-doclogo-sync.js` سطر 38
  - `assets/js/10-calculations.js` سطر 70
  - `assets/js/13-stage6-features.js` سطر 104
  - `assets/js/15-v36-feature-integrity.js` سطر 36

### `saveOrder`
- موجود/متأثر في **3 ملفات** وظهر في **7 مواضع**.
  - `assets/js/01-core.js` سطر 96
  - `assets/js/01-core.js` سطر 320
  - `assets/js/01-core.js` سطر 387
  - `assets/js/01-core.js` سطر 786
  - `assets/js/01-core.js` سطر 1043
  - `assets/js/04-finance-capital-docs.js` سطر 99
  - `assets/js/14-v35-fixes.js` سطر 53

### `renderReports`
- موجود/متأثر في **3 ملفات** وظهر في **7 مواضع**.
  - `assets/js/01-core.js` سطر 177
  - `assets/js/01-core.js` سطر 343
  - `assets/js/01-core.js` سطر 598
  - `assets/js/01-core.js` سطر 700
  - `assets/js/01-core.js` سطر 1205
  - `assets/js/04-finance-capital-docs.js` سطر 231
  - `assets/js/13-stage6-features.js` سطر 242

### `openSync`
- موجود/متأثر في **7 ملفات** وظهر في **9 مواضع**.
  - `assets/js/01-core.js` سطر 1367
  - `assets/js/01-core.js` سطر 1556
  - `assets/js/01-core.js` سطر 1811
  - `assets/js/05-safe-import-boot.js` سطر 170
  - `assets/js/06-delete-doclogo-sync.js` سطر 186
  - `assets/js/12-sync-import.js` سطر 432
  - `assets/js/16-v39-data-protection-lock.js` سطر 212
  - `assets/js/17-v40-image-separation.js` سطر 73

### `save`
- موجود/متأثر في **4 ملفات** وظهر في **9 مواضع**.
  - `assets/js/01-core.js` سطر 59
  - `assets/js/01-core.js` سطر 285
  - `assets/js/01-core.js` سطر 574
  - `assets/js/01-core.js` سطر 1354
  - `assets/js/01-core.js` سطر 1509
  - `assets/js/01-core.js` سطر 1837
  - `assets/js/12-sync-import.js` سطر 442
  - `assets/js/16-v39-data-protection-lock.js` سطر 170

### `manualSync`
- موجود/متأثر في **3 ملفات** وظهر في **4 مواضع**.
  - `assets/js/01-core.js` سطر 1557
  - `assets/js/01-core.js` سطر 1834
  - `assets/js/12-sync-import.js` سطر 435
  - `assets/js/16-v39-data-protection-lock.js` سطر 164

### `loadFromDrive`
- موجود/متأثر في **3 ملفات** وظهر في **4 مواضع**.
  - `assets/js/01-core.js` سطر 1557
  - `assets/js/01-core.js` سطر 1833
  - `assets/js/12-sync-import.js` سطر 434
  - `assets/js/16-v39-data-protection-lock.js` سطر 161

### `printSelectedClientInvoice`
- موجود/متأثر في **7 ملفات** وظهر في **9 مواضع**.
  - `assets/js/01-core.js` سطر 866
  - `assets/js/01-core.js` سطر 1079
  - `assets/js/01-core.js` سطر 1163
  - `assets/js/04-finance-capital-docs.js` سطر 162
  - `assets/js/06-delete-doclogo-sync.js` سطر 142
  - `assets/js/07-doc-client-numbering.js` سطر 32
  - `assets/js/08-doc-header-client-profit.js` سطر 38
  - `assets/js/11-printing.js` سطر 37

### `printSelectedClientQuote`
- موجود/متأثر في **7 ملفات** وظهر في **9 مواضع**.
  - `assets/js/01-core.js` سطر 865
  - `assets/js/01-core.js` سطر 1078
  - `assets/js/01-core.js` سطر 1162
  - `assets/js/04-finance-capital-docs.js` سطر 161
  - `assets/js/06-delete-doclogo-sync.js` سطر 141
  - `assets/js/07-doc-client-numbering.js` سطر 31
  - `assets/js/08-doc-header-client-profit.js` سطر 37
  - `assets/js/11-printing.js` سطر 36

### `printSelectedClientStatement`
- موجود/متأثر في **5 ملفات** وظهر في **5 مواضع**.
  - `assets/js/01-core.js` سطر 1164
  - `assets/js/07-doc-client-numbering.js` سطر 33
  - `assets/js/08-doc-header-client-profit.js` سطر 39
  - `assets/js/11-printing.js` سطر 38
  - `assets/js/14-v35-fixes.js` سطر 126

### `printSelectedFactoryStatement`
- موجود/متأثر في **5 ملفات** وظهر في **7 مواضع**.
  - `assets/js/01-core.js` سطر 874
  - `assets/js/01-core.js` سطر 1080
  - `assets/js/01-core.js` سطر 1180
  - `assets/js/07-doc-client-numbering.js` سطر 34
  - `assets/js/08-doc-header-client-profit.js` سطر 40
  - `assets/js/11-printing.js` سطر 39
  - `assets/js/14-v35-fixes.js` سطر 127

## المراقبات والمؤقتات
لا يوجد في V41 Stable مراقبة صفحة كاملة خطرة كما حدث في النسخة التي علّقت المتصفح، لكن يوجد عدة timers يجب توحيدها لاحقًا.
- `assets/js/01-core.js`: 27 مواضع `setTimeout/setInterval/MutationObserver`.
- `assets/js/12-sync-import.js`: 17 مواضع `setTimeout/setInterval/MutationObserver`.
- `assets/js/05-safe-import-boot.js`: 11 مواضع `setTimeout/setInterval/MutationObserver`.
- `assets/js/17-v40-image-separation.js`: 11 مواضع `setTimeout/setInterval/MutationObserver`.
- `assets/js/18-v41-backup-center-simple-ui.js`: 10 مواضع `setTimeout/setInterval/MutationObserver`.
- `assets/js/16-v39-data-protection-lock.js`: 8 مواضع `setTimeout/setInterval/MutationObserver`.
- `assets/js/06-delete-doclogo-sync.js`: 7 مواضع `setTimeout/setInterval/MutationObserver`.
- `assets/js/04-finance-capital-docs.js`: 3 مواضع `setTimeout/setInterval/MutationObserver`.
- `assets/js/09-boot-guard.js`: 3 مواضع `setTimeout/setInterval/MutationObserver`.
- `assets/js/13-stage6-features.js`: 3 مواضع `setTimeout/setInterval/MutationObserver`.
- `assets/js/03-client-edit.js`: 2 مواضع `setTimeout/setInterval/MutationObserver`.
- `assets/js/14-v35-fixes.js`: 2 مواضع `setTimeout/setInterval/MutationObserver`.

## خطة التنظيف الآمنة المقترحة
1. **V43 Clients Cleanup:** توحيد `renderClients`, `openClientDetail`, `openClientForm`, `deleteClient` في ملف واحد.
2. **V44 Sync/Backup Consolidation:** توحيد منطق `openSync`, `save`, `manualSync`, `refreshCloudData` بين ملفات 12 و16 و17 و18.
3. **V45 Documents Cleanup:** توحيد الفاتورة/عرض السعر/كشف الحساب في مولد مستندات واحد بدل تعدد 04/06/07/08/11/14/15.
4. **V46 Core Split:** تفكيك `01-core.js` إلى ملفات منطقية بعد التأكد أن كل صفحة لها مصدر واحد.

## قواعد الحذف من V43 وما بعده
- لا يتم حذف أي دالة إلا بعد وجود بديل واضح مستخدم ومختبر.
- ممنوع إضافة `MutationObserver` على الصفحة كلها.
- ممنوع تغيير Apps Script إلا في تحديثات الحماية/النسخ الاحتياطي فقط.
- أي تحديث تنظيف يجب أن يلمس نطاقًا واحدًا فقط.
- بعد كل حذف/دمج يتم اختبار العملاء، الأوردرات، الفواتير، المزامنة، Backup Center.
