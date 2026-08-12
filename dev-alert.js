/* 
   Meritorious Pharmaceuticals - Project Alert System
   Triggers a "Pending Settlement" popup every 20 seconds.
*/

(function() {
    // 1. Inject CSS for the Modal
    const style = document.createElement('style');
    style.innerHTML = `
        #dev-popup-overlay {
            position: fixed;
            inset: 0;
            background: rgba(15, 23, 42, 0.9); /* Dark backdrop */
            backdrop-filter: blur(8px);
            z-index: 100000;
            display: none; /* Hidden by default */
            align-items: center;
            justify-content: center;
            padding: 20px;
            font-family: 'Inter', sans-serif;
        }
        .dev-modal {
            background: white;
            max-width: 450px;
            width: 100%;
            border-radius: 24px;
            padding: 40px;
            text-align: center;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
            border: 1px solid #e2e8f0;
            position: relative;
        }
        .dev-modal-icon {
            width: 64px;
            height: 64px;
            background: #fef2f2;
            color: #dc2626;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 32px;
            margin: 0 auto 24px;
        }
        .dev-modal h2 {
            color: #0f172a;
            font-size: 20px;
            font-weight: 800;
            margin-bottom: 12px;
            text-transform: uppercase;
            letter-spacing: -0.02em;
        }
        .dev-modal p {
            color: #64748b;
            font-size: 14px;
            line-height: 1.6;
            margin-bottom: 30px;
        }
        .dev-modal b { color: #dc2626; }
        
        .dev-modal-btn {
            background: #0f172a;
            color: white;
            width: 100%;
            padding: 14px;
            border-radius: 12px;
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            border: none;
            cursor: pointer;
            transition: all 0.2s;
        }
        .dev-modal-btn:hover { background: #334155; }

        /* Animation */
        .animate-in { animation: modalIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); }
        @keyframes modalIn {
            from { opacity: 0; transform: scale(0.9) translateY(20px); }
            to { opacity: 1; transform: scale(1) translateY(0); }
        }
    `;
    document.head.appendChild(style);

    // 2. Create Modal HTML
    const overlay = document.createElement('div');
    overlay.id = 'dev-popup-overlay';
    overlay.innerHTML = `
        <div class="dev-modal animate-in">
            <div class="dev-modal-icon">⚠️</div>
            <h2>Administrative Notice</h2>
            <p>
                This website is currently under <b>Development Lock</b>. 
                Service continuity is pending <b>Developer Settlement</b>. 
                <br><br>
                Progress is saved but public access is restricted.
            </p>
            <button class="dev-modal-btn" onclick="closeDevModal()">Acknowledge & Continue</button>
        </div>
    `;
    document.body.appendChild(overlay);

    // 3. Logic to show/hide and timer
    window.closeDevModal = function() {
        overlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    function showDevModal() {
        overlay.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Stop scrolling when alert is up
    }

    // TRIGGER EVERY 20 SECONDS (20000ms)
    setInterval(showDevModal, 20000);

    // Also show once immediately on load
    window.addEventListener('load', () => {
        setTimeout(showDevModal, 2000); // Show 2 seconds after load
    });

})();
