// State
    const loaderWrap = document.getElementById('loaderWrap');
    const pauseBtn = document.getElementById('pauseBtn');
    const speedRange = document.getElementById('speedRange');
    const sizeRange = document.getElementById('sizeRange');
    const themeBtn = document.getElementById('themeBtn');
    const themeMenu = document.getElementById('themeMenu');
    const balls = Array.from(document.querySelectorAll('.ball'));
    const shadow = document.querySelector('.shadow');

    // Pause / Play
    let paused = false;
    pauseBtn.addEventListener('click', () => {
      paused = !paused;
      loaderWrap.classList.toggle('is-paused', paused);
      pauseBtn.textContent = paused ? 'Play' : 'Pause';
    });

    // Speed control (changes animation duration)
    const applySpeed = () => {
      const val = Number(speedRange.value); // 60-200
      const duration = (val / 100).toFixed(2); // ~0.6s - 2.0s
      balls.forEach(b => b.style.animationDuration = duration + 's');
      shadow.style.animationDuration = duration + 's';
    };
    speedRange.addEventListener('input', applySpeed);
    applySpeed();

    // Size control (scales the whole loader area)
    const applySize = () => {
      const percent = Number(sizeRange.value) / 100; // 0.7 - 1.3
      loaderWrap.style.setProperty('--scale', percent);
      // Smooth scale on the inner area
      const area = loaderWrap.querySelector('.relative.w-full');
      if (area) {
        area.style.transform = `scale(${percent})`;
        area.style.transformOrigin = 'center bottom';
        area.style.transition = 'transform 200ms ease';
      }
    };
    sizeRange.addEventListener('input', applySize);
    applySize();

    // Theme menu
    let menuOpen = false;
    themeBtn.addEventListener('click', () => {
      menuOpen = !menuOpen;
      themeMenu.classList.toggle('hidden', !menuOpen);
    });
    document.addEventListener('click', (e) => {
      if (!themeBtn.contains(e.target) && !themeMenu.contains(e.target)) {
        themeMenu.classList.add('hidden');
        menuOpen = false;
      }
    });
    themeMenu.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        const theme = btn.getAttribute('data-theme');
        document.documentElement.classList.remove('theme-cool','theme-dark','theme-candy');
        if (theme && theme !== 'default') {
          document.documentElement.classList.add(theme);
        }
        themeMenu.classList.add('hidden');
        menuOpen = false;
      });
    });
  </script>
<script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'971b9e4f426276f3',t:'MTc1NTYyNzEzOC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>
</html>