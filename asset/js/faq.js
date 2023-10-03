document.addEventListener("DOMContentLoaded", function () {
    const faqSections = document.querySelectorAll('[data-toggle="faq"]');

    faqSections.forEach((section) => {
        section.addEventListener("click", function () {
            // Menghilangkan class "active" dari semua elemen FAQ
            faqSections.forEach((faq) => {
                if (faq !== this) {
                    faq.classList.remove("active");
                }
            });

            // Toggle class "active" pada elemen yang diklik
            this.classList.toggle("active");
        });
    });
});
