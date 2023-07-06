document.addEventListener('DOMContentLoaded', function() {
    const m=document.getElementById('menu');
        const n=document.getElementById('navigation');
        m.addEventListener('click',myfunction);
       function myfunction()
       {
        if(n.style.display==='none')
        {
            n.style.display='block'
        }
        else
        {
            n.style.display='none';
        }
        
       }
});

