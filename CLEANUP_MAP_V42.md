# V42 Cleanup Map

## ملفات JavaScript الحالية ودورها

- `assets/js/01-core.js` — 539.6 KB — الكود الأساسي القديم؛ يحتوي منطق صفحات كثيرة ودوال متكررة.
- `assets/js/02-pwa-register.js` — 1.4 KB — تسجيل PWA وتحسينات بسيطة.
- `assets/js/03-client-edit.js` — 4.7 KB — تعديل بيانات العميل والمديونية.
- `assets/js/04-finance-capital-docs.js` — 20.2 KB — رأس المال وبعض المستندات القديمة.
- `assets/js/05-safe-import-boot.js` — 11.4 KB — استيراد آمن وحماية فتح البرنامج.
- `assets/js/06-delete-doclogo-sync.js` — 19.2 KB — حذف/لوجو/مزامنة قديمة.
- `assets/js/07-doc-client-numbering.js` — 16.1 KB — ترقيم العملاء ومستندات.
- `assets/js/08-doc-header-client-profit.js` — 20.3 KB — هيدر المستندات وربح العميل.
- `assets/js/09-boot-guard.js` — 2.2 KB — حماية شاشة التحميل والصفحات.
- `assets/js/10-calculations.js` — 7.1 KB — حسابات وحذف مرتبط بالحسابات.
- `assets/js/11-printing.js` — 15.1 KB — طباعة/PDF.
- `assets/js/12-sync-import.js` — 29.5 KB — مزامنة واستيراد.
- `assets/js/13-stage6-features.js` — 19.4 KB — Features العملاء/الحذف/التقارير المتقدمة.
- `assets/js/14-v35-fixes.js` — 21.0 KB — إصلاحات الأرشيف والإيصالات والفلاتر.
- `assets/js/15-v36-feature-integrity.js` — 17.5 KB — حماية رجوع features V34/V35.
- `assets/js/16-v39-data-protection-lock.js` — 14.4 KB — قفل حماية الداتا.
- `assets/js/17-v40-image-separation.js` — 17.6 KB — فصل الصور.
- `assets/js/18-v41-backup-center-simple-ui.js` — 23.0 KB — مركز النسخ الاحتياطي وتبسيط واجهة المزامنة.
- `config.js` — 0.2 KB — يحتاج تصنيف أدق.
- `sw.js` — 2.8 KB — يحتاج تصنيف أدق.

## ترتيب الدمج المقترح

- `clients.js`: من 03 + أجزاء العملاء من 07 + 13 + 15.
- `orders.js`: من 01 + 04 + 10 + 14.
- `documents.js`: من 04 + 06 + 07 + 08 + 11 + 14.
- `sync.js`: من 12 + أجزاء آمنة من 16.
- `data-guard.js`: من 16 + جزء من 18.
- `images.js`: من 17.
- `backup-center.js`: من 18.
- `core-utils.js`: `money`, `today`, `getClient`, `getFactory`, `safe/esc`, `num/n`.
