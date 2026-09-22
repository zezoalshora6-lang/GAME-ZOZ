// التحقق من حالة تفعيل الأداة أولاً عبر التخزين المحلي
chrome.storage.local.get(['isActivated'], (result) => {
  if (result.isActivated) {
    console.log("♕بعــــ亗ـــزق『Z°1』: تم تفعيل حماية الجودة ورفع 60FPS/2K بنجاح.");
    
    // مراقبة التغييرات في الصفحة لضبط خيارات الجودة العالية تلقائياً
    const observer = new MutationObserver((mutations, obs) => {
      // البحث عن خيارات تفعيل الجودة العالية أو الـ HD في صفحة الرفع
      const uploadHDToggles = document.querySelectorAll('input[type="checkbox"]');
      
      uploadHDToggles.forEach(toggle => {
        // التحقق من خيار الجودة وتفعيله تلقائياً إذا لم يكن مفعلاً
        if (!toggle.checked) {
          const parentLabel = toggle.closest('label') || toggle.parentElement;
          if (parentLabel && (parentLabel.innerText.includes('HD') || parentLabel.innerText.includes('high quality') || parentLabel.innerText.includes('عالية'))) {
            toggle.click();
            console.log("♕بعــــ亗ـــزق『Z°1』: تم فرض تفعيل خيار الجودة العالية بنجاح.");
          }
        }
      });
    });
    
    // بدء مراقبة عناصر الصفحة عند تحميلها
    observer.observe(document.body, { childList: true, subtree: true });
  }
});
