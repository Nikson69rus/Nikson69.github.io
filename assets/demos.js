document.addEventListener('DOMContentLoaded', function() {
  var typed = new Typed('#typed', {
    strings: ["A Repairer PC", "A Web user", "A junior developer", "Just a good guy :)"], // строки выводимые в печать
            typeSpeed: 100, // скорость набора
            backSpeed: 50, // скорость удаления текста
            startDelay: 100, // начальная задержка перед набором
            backDelay: 777, // пауза перед удалением текста
            loop: false, // повтор (true или false)
            loopCount: false, // число повторов, false = бесконечно
            showCursor: true, // отображение курсора
            attr: null, // атрибут
            callback: function(){ } // функция вызываемая после окончания работы плагина
        
  });

});

function prettyLog(str) {
  console.log('%c ' + str, 'color: green; font-weight: bold;');
}

function toggleLoop(typed) {
  if (typed.loop) {
    typed.loop = false;
  } else {
    typed.loop = true;
  }
}