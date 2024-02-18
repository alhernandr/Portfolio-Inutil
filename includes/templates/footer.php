<!-- Contact -->



<div class="full_footer">
<section id="contact">
    <div class="contact__Container">
      <h2 class="titleBackground">Contact<p class="text__overlap">Get in Touch</p></h2>

      <div class="contact__wrap">
        <div class="contact__data">
          <h2 class="contactData__title">Álvaro's Contact</h2>

          <p class="contactData__address">Santa Brigida, Las Palmas de Gran Canaria.</p>
          <p class="contact__text">(+34) 646 156 484</p>
          <p class="contact__text last__parag">alvaro29032000@gmail.com</p>

          <h2 class="contactData__title">Follow Me</h2>
          <div class="iconos">
              <a href="https://www.facebook.com/"><img src="/img/facebook.png" alt="Facebook"></a>
              <a href="https://twitter.com/home"><img src="/img/twitter.png" alt="X"></a>
              <a href="https://www.instagram.com/?hl=es"><img src="/img/instagram.png" alt="Instagram"></a>
              <a href="https://github.com/"><img src="/img/Github.png" alt="GitHub"></a>
          </div>
        </div>
<!------------------------------FORM------------------------------------>
      
      <div class="contact__form">
      <p id="msg"></p>    
      <h2 class="contactData__title">SEND US A NOTE</h2>
          <form method= "POST" id="formEmail">
            <input id="name" name="name" type="text" class="form__input" placeholder="Name" required/>
           
            <input id="email" name="email" type="email" class="form__input" placeholder="Email" required/>

            <div class="text__container">
              <textarea id="message"name="text_msg" class="form__input" rows="5" placeholder="Tell me more about your needs..." required></textarea>
            </div>

            <div class="send__button">
            <button class="form__button" type="button" id="button"><a >Send Message</a></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- footer -->
    <footer class="footer__container">
      <p class="footer__desc">
          All Rights Reserved.
      </p>
      <ul class="footer__list">
        <li class="footer__linkItem"><a>Terms & Policy</a></li>
        <li class="footer__linkItem"><a>Disclaimer</a></li>
      </ul>
    </footer>
  </div>
  <script type="text/javascript"
  src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>

  <script type="text/javascript">
    emailjs.init('8fVNCHFhXG90q8PY9')
  </script>
  <script src="../js/validarFormulario.js"></script>
  <script src="../js/cookies.js"></script>
</body>
</html>