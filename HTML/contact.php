<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BorchDev - Contact</title>


    <link rel="stylesheet" href="../CSS/contact.css">
    <link rel="stylesheet" href="../CSS/generalStyle.css">
    

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">


</head>
<body>

    <header>
        <div id="header-container">
            <a href="../index.html"><img src="../Resources/Imgs/borchDevLogo.svg" id="main-logo"></a>
            <a href="../index.html"><img src="../Resources/Imgs/borchResponsiveLogo.svg" id="main-logo-small" style="width: 130px; height: auto;"></a>
            <div id="header-navbar">
                <nav>
                    <ul id="nav-links">
                        <li><a href="about.html" class="nav-item" data-bgcolor="#ffee99">About</a></li>
                        <li><a href="games.html" class="nav-item" data-bgcolor="#ff5941">My Work</a></li>
                        <li><a href="#" id="active" class="nav-item" data-bgcolor="#3cb371">Contact</a></li>
                    </ul>
                </nav>
                <div class="hamburger" onclick="toggleMenu()"></div>
            </div>
        </div>

        <div id="mobile-menu" class="mobile-menu">
            <a href="about.html">About</a>
            <a href="games.html">My Work</a>
            <a href="#" id="mobile-active">Contact</a>
        </div>

    </header>

    <main>
        <?php 
            include ('error.php');
        ?>

        <div id="contact-form-container">
            <h1>Contact me!</h1>
            <p>If you have any question or you want to write me. Write your message and I will answer ASAP</p>
            
            <div id="contact-form">
                <?php
                    if (isset($_SESSION['successMessage'])) {
                        echo $_SESSION['successMessage'];
                        unset($_SESSION['successMessage']);
                    }
                    
                    if (isset($_SESSION['errorMessage'])) {
                        echo $_SESSION['errorMessage'];
                        unset($_SESSION['errorMessage']);
                    }
                    
                ?>
                <form action="" method="post" id="form">
                    <div class="form-group">
                        <label for="email">Your mail:</label>
                        <input type="email" id="email" name="email" placeholder="yourmail@example.com" required>
                    </div>
                    <div class="form-group">
                        <label for="sender">Name:</label>
                        <input type="text" id="sender" name="sender" placeholder="Write your name" required>
                    </div>
                    <div class="form-group">
                        <label for="subject">Subject:</label>
                        <input type="text" id="subject" name="subject" placeholder="Message subject" required>
                    </div>
                    <div class="form-group message">
                        <label for="message">Message:</label>
                        <textarea id="message" name="message" rows="20" cols="55" required></textarea>
                    </div>
                    <button type="submit">Submit!</button>
                </form>
                
            </div>
            
        </div>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>


        <script type="text/javascript">
            $("form").submit(function(e)
            {
                let error = "";
                if($("#email").val() == "")
                {
                    error += "Email field is required.<br>";
                }
                if($("#subject").val() == "")
                {
                    error += "Subject field is required.<br>";
                }
                if($("#message").val() == "")
                {
                    error += "Message field cannot be empty.<br>";
                }

                if(error != "")
                {
                    $("#error").html('<div class="alert alert-danger"' + 'role = "alert"><p><strong> There were error(s) in your form:</strong></p>'
                        + error + '</div>'
                    );

                    return false;
                }
                else
                {
                    return true;
                }
            });
        </script>


        <script type="text/javascript">
            window.onload = function() {
                const params = new URLSearchParams(window.location.search);
                const error = params.get('error');
                const success = params.get('success');

                if (error) {
                    document.getElementById('error').innerHTML = '<div class="alert alert-danger custom-danger" role="alert">' + decodeURIComponent(error) + '</div>';
                }

                if (success) {
                    document.getElementById('error').innerHTML = '<div class="alert alert-success custom-success" role="alert">' + decodeURIComponent(success) + '</div>';
                }
            };
        </script>

        



    </main>

    <footer id = "footer">
        <div id="footer-container">
            <p id="footer-copyright">&copy; BorchDev, 2024</p>

            <div id="footer-links">
                <a href="https://github.com/borjita22/Borja-Garcia-Dev/tree/3688d73ae99bbfd3fbfbcc217e9489b93da5d4f9/projects" target="_blank"> <i class="fa">&#xf09b;</i> </a>
                <a href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAD0rxMgBkkPGvzqttebpZrna3rDyX7D8bJY&keywords=borja%20garcía&origin=RICH_QUERY_SUGGESTION&position=0&searchId=6a2412ec-2a4b-47d2-a416-bada42c6f3de&sid=UH-&spellCorrectionEnabled=false" target="_blank"> <i class="fa">&#xf08c;</i> </a>
            </div>
           
        </div>
        
    </footer>

    <script src="../JavaScript/index.js"></script>
    <script src="../JavaScript/contact.js"></script>
    
</body>
</html>