# V45 Dead Asset / Public Docs Cleanup

## ما تم تنظيفه بأمان

- إزالة ملفات التقارير القديمة من جذر النسخة العامة:
  - `CODE_AUDIT_V42.md`
  - `CLEANUP_MAP_V42.md`
  - `CLIENTS_CLEANUP_V43.md`
  - `FILE_MAP_V44.md`
  - `TEST_CHECKLIST_V44.txt`
  - `V44_README_AR.txt`
  - `V44_SYNC_FIX_NOTES.txt`
- إزالة `icon-192.png` و `icon-512.png` لأنهما كانا نسخًا مطابقة للوجو `hp-logo`.
- تحويل كل fallback قديم من `icon-*.png` إلى `hp-logo-v3-*.png`.
- تحديث الكاش والروابط إلى `v=45cleanup`.
- تحديث رقم نسخة الواجهة المرسل للمزامنة إلى `45.0.0-dead-code-cleanup`.

## ما لم يتم حذفه عمدًا

لم يتم حذف دوال JavaScript القديمة داخل `01-core-base.js` و `02-business-legacy.js` في هذه النسخة، لأن حذفها يحتاج اختبار وظيفي أوسع. سيتم التعامل معها في V46/V47 على أجزاء، وليس دفعة واحدة.

## النتيجة

- عدد ملفات الإنتاج أقل.
- ملفات التوثيق القديمة لم تعد تترفع على GitHub Pages.
- لا يوجد تغيير في منطق العملاء أو الأوردرات أو الحسابات أو الحماية.
