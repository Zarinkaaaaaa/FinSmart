document.addEventListener('DOMContentLoaded', function () {
    const triggers = document.querySelectorAll('[data-tab-trigger]');
    const contents = document.querySelectorAll('.ads-tab-content');

    triggers.forEach(trigger => {
        trigger.addEventListener('click', function (e) {
            e.preventDefault();

            const tabName = this.getAttribute('data-tab-trigger');

            triggers.forEach(t => t.classList.remove('section-ads-nav--active'));
            contents.forEach(c => c.classList.remove('active'));

            this.classList.add('section-ads-nav--active');
            document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
        });
    });
});





document.querySelectorAll('.ads-tab').forEach(tab => {
    tab.addEventListener('click', function () {
        document.querySelectorAll('.ads-tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
    });
});



// let timeLeft = 20;
// const timerEl = document.getElementById('timer');
// const interval = setInterval(() => {
//     if (timeLeft <= 0) {
//         clearInterval(interval);
//         timerEl.textContent = '00:00';
//         timerEl.style.color = '#F44336';
//         return;
//     }
//     timeLeft--;
//     const mins = Math.floor(timeLeft / 60).toString().padStart(2, '0');
//     const secs = (timeLeft % 60).toString().padStart(2, '0');
//     timerEl.textContent = `${mins}:${secs}`;
// }, 1000);

// function copyAmount() {
//     const amount = document.getElementById('transferAmount').textContent;
//     navigator.clipboard.writeText(amount).then(() => {
//         const btn = document.querySelector('.copy-btn');
//         const original = btn.textContent;
//         btn.textContent = 'Скопировано!';
//         setTimeout(() => btn.textContent = original, 2000);
//     });
// }



document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.section-ads-nav');
    const links = nav.querySelectorAll('a');
    const slider = nav.querySelector('.nav-slider');
    const contents = document.querySelectorAll('.ads-tab-content');

    function moveSlider(link) {
        const navRect = nav.getBoundingClientRect();
        const linkRect = link.getBoundingClientRect();
        
        slider.style.left = `${linkRect.left - navRect.left}px`;
        slider.style.width = `${linkRect.width}px`;
    }

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); 
            
            links.forEach(l => l.classList.remove('section-ads-nav--active'));
           
            link.classList.add('section-ads-nav--active');
            
            moveSlider(link);

            const tabName = link.dataset.tabTrigger;
            if (tabName && contents.length > 0) {
                contents.forEach(c => c.classList.remove('active'));
                const targetContent = document.querySelector(`[data-tab="${tabName}"]`);
                if (targetContent) targetContent.classList.add('active');
            }
        });
    });

    const activeLink = nav.querySelector('.section-ads-nav--active');
    if (activeLink) {
        moveSlider(activeLink);
    }

    window.addEventListener('resize', () => {
        const currentActive = nav.querySelector('.section-ads-nav--active');
        if (currentActive) moveSlider(currentActive);
    });
});









// ============================================
// МОДАЛЬНОЕ ОКНО KYC (Верификация)
// ============================================
const kycModal = document.getElementById('kycModal');
const kycModalClose = document.getElementById('kycModalClose');
const kycModalBtn = document.querySelector('.kyc-modal-btn');
const kycOpenButtons = document.querySelectorAll('[data-open-kyc-modal]');

// Открытие KYC модалки
function openKycModal(e) {
    if (e) e.preventDefault();
    if (kycModal) {
        kycModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeKycModal() {
    if (kycModal) {
        kycModal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

kycOpenButtons.forEach(btn => {
    btn.addEventListener('click', openKycModal);
});

if (kycModalClose) {
    kycModalClose.addEventListener('click', closeKycModal);
}

if (kycModal) {
    kycModal.addEventListener('click', function(e) {
        if (e.target.classList.contains('kyc-modal-overlay')) {
            closeKycModal();
        }
    });
}

if (kycModalBtn) {
    kycModalBtn.addEventListener('click', function() {
        window.location.href = '/verification'; 
    });
}

const createAdModal = document.getElementById('createAdModal');
const createAdModalClose = document.getElementById('createAdModalClose');
const createAdOpenButtons = document.querySelectorAll('[data-open-create-ad]');
const createAdTypeButtons = document.querySelectorAll('.ad-type-btn');
const createAdUseAllBtn = document.querySelector('.use-all-btn');
const createAdPublishBtn = document.querySelector('.btn-publish');
const createAdCancelBtn = document.querySelector('.btn-cancel');

function openCreateAdModal(e) {
    if (e) e.preventDefault();
    if (createAdModal) {
        createAdModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeCreateAdModal() {
    if (createAdModal) {
        createAdModal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

createAdOpenButtons.forEach(btn => {
    btn.addEventListener('click', openCreateAdModal);
});

if (createAdModalClose) {
    createAdModalClose.addEventListener('click', closeCreateAdModal);
}

if (createAdModal) {
    createAdModal.addEventListener('click', function(e) {
        if (e.target.classList.contains('create-ad-modal-overlay')) {
            closeCreateAdModal();
        }
    });
}

createAdTypeButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        createAdTypeButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
    });
});

if (createAdUseAllBtn) {
    createAdUseAllBtn.addEventListener('click', function() {
        const balanceAmount = document.querySelector('.balance-amount');
        const quantityInput = document.querySelector('.quantity-input');
        if (balanceAmount && quantityInput) {
            const balance = balanceAmount.textContent.split(' ')[0];
            quantityInput.value = balance;
        }
    });
}

if (createAdPublishBtn) {
    createAdPublishBtn.addEventListener('click', function() {
        
        console.log('Публикация объявления...');
    });
}

if (createAdCancelBtn) {
    createAdCancelBtn.addEventListener('click', closeCreateAdModal);
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        if (kycModal && kycModal.classList.contains('active')) {
            closeKycModal();
        }
        if (createAdModal && createAdModal.classList.contains('active')) {
            closeCreateAdModal();
        }
    }
});








//модальное окно арбитража
const openArbitrationBtn = document.getElementById('openArbitrationBtn');
const arbitrationModal = document.getElementById('arbitrationModal');
const arbitrationModalClose = document.getElementById('arbitrationModalClose');
const cancelArbitration = document.getElementById('cancelArbitration');
const checkboxInput = document.querySelector('.checkbox-input');
const submitArbitration = document.getElementById('submitArbitration');

openArbitrationBtn.addEventListener('click', function() {
    arbitrationModal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

function closeArbitrationModal() {
    arbitrationModal.classList.remove('active');
    document.body.style.overflow = '';
}

arbitrationModalClose.addEventListener('click', closeArbitrationModal);
cancelArbitration.addEventListener('click', closeArbitrationModal);

arbitrationModal.addEventListener('click', function(e) {
    if (e.target.classList.contains('arbitration-modal-overlay')) {
        closeArbitrationModal();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && arbitrationModal.classList.contains('active')) {
        closeArbitrationModal();
    }
});

checkboxInput.addEventListener('change', function() {
    submitArbitration.disabled = !this.checked;
});

submitArbitration.addEventListener('click', function() {
    if (checkboxInput.checked) {
        alert('Арбитраж открыт!');
        closeArbitrationModal();
    }
});