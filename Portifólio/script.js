 // small interactive helpers
    document.getElementById('year').textContent = new Date().getFullYear();

    function downloadResume(){
      // placeholder: atualize o href para o arquivo real
      const link = document.createElement('a');
      link.href = 'https://drive.google.com/file/d/1by2cCqtf7ZX7FiQL2iGFbyVr8mM8oVO_/view?usp=sharing';
      link.download = 'Matheus-Mussi.pdf';
      document.body.appendChild(link);  
      link.click();                      
      document.body.removeChild(link);   
    }
        function downloadCisco(){
      // placeholder: atualize o href para o arquivo real
      const link = document.createElement('a');
      link.href = 'https://drive.google.com/file/d/1VT2J2HWrmKU5ydMdJrV8VWomoAO0vwt9/view?usp=sharing';
      link.download = 'ccna introduction to networks.png';
      document.body.appendChild(link);  
      link.click();                      
      document.body.removeChild(link);   
    }




    // smooth scroll for nav links
    document.querySelectorAll('nav a').forEach(a=>{
      a.addEventListener('click', (ev)=>{
        ev.preventDefault();
        const id = a.getAttribute('href').slice(1);
        const el = document.getElementById(id);
        if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
      })
    })