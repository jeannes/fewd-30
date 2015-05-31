// JS goes here

// Make #header-img div an event listener, click --> prompt to upload img/url
  // upload user's img into #header-img div

// Make #title-img div an event listener, click --> prompt to upload img/url
  // upload user's img into #title-img div

// add image panels to the comicPage, create interactive panels
  // find elements on the page
  var main = document.querySelector("#main");
  var comicPage = document.querySelector("#comic-page");

  //append 'click to add image' image and 'click when done' image to main page
  function appendClickImages () {
    var clickToAddImage = document.createElement("img");
    clickToAddImage.setAttribute("src", "http://jeannes.github.io/fewd-30/Final/images/click%20to%20add%20an%20image.png");
    clickToAddImage.setAttribute("id", "add-image");
    main.appendChild(clickToAddImage);
    var clickWhenDone = document.createElement("img");
    clickWhenDone.setAttribute("src", "http://jeannes.github.io/fewd-30/Final/images/click%20when%20done.png");
    clickWhenDone.setAttribute("id", "done");
    main.appendChild(clickWhenDone);
  }

  //call the function
  appendClickImages();

  // find appended click images on page
  var clickToAddImage = document.querySelector("#add-image");
  var clickWhenDone = document.querySelector("#done");

  // make clickToAddImage an event listener, click and prompt for image path, append new image to comic page
  function createPanelImage (event) {
    event.preventDefault();
    var panelImageUrl = prompt("Please insert panel image url or file path. \nMake sure all panel images fit within comic page \n(650 X 1000 px).");
    if (panelImageUrl == null) {

    } else {
      //create panelImage, click for lightbox modal
      //create link for panelImage
      var panelLink = document.createElement("a");
      panelLink.setAttribute("class", "panel-link")
      var imgId = "img" + $(".panel-link").length;
      panelLink.setAttribute("href", "#" + imgId);
      comicPage.appendChild(panelLink);
      //create panelImage and append to Link
      var panelImage = document.createElement("img");
      panelImage.setAttribute("src", panelImageUrl);
      panelImage.setAttribute("class", "panel");
      panelLink.appendChild(panelImage);
      //create lightbox div
      var lightbox = document.createElement("div");
      lightbox.setAttribute("class", "lightbox");
      lightbox.setAttribute("id", imgId);
      comicPage.appendChild(lightbox);
      //create prev image in lightbox div
      var prevImg = document.createElement("img");
      prevImg.setAttribute("class", "prev");
      prevImg.setAttribute("src", "http://jeannes.github.io/fewd-30/Final/images/prev.png");
      lightbox.appendChild(prevImg);
      //create lbPanel image in lightbox div
      var lbPanel = document.createElement("img");
      lbPanel.setAttribute("class", "lb-panel");
      lbPanel.setAttribute("src", panelImageUrl);
      lightbox.appendChild(lbPanel);
      //create next image in lightbox div
      var nextImg = document.createElement("img");
      nextImg.setAttribute("class", "next");
      nextImg.setAttribute("src", "http://jeannes.github.io/fewd-30/Final/images/next.png");
      lightbox.appendChild(nextImg);
      //find all dynamically created prev and next images
      // make previous image an event listener
      prevImg.addEventListener("click", function(e){
        e.stopPropagation();
        var currentImageId = location.href.split("#")[1];
        var prevImageId = 'img' + (parseInt(currentImageId.split('img')[1])-1);
        location.replace(location.href.split("#")[0] + '#' + prevImageId);
      })
      //make next image an event listener
      nextImg.addEventListener("click", function(e){
        e.stopPropagation();
        var currentImageId = location.href.split("#")[1];
        var nextImageId = 'img' + (parseInt(currentImageId.split('img')[1])+1);
        location.replace(location.href.split("#")[0] + '#' + nextImageId);
      })
      //to exit lightbox by clicking outside
      lightbox.addEventListener('click', function (e) {
        e.preventDefault();
        location.replace(location.href.split("#")[0] + '#_')
      })
    }
  }

  clickToAddImage.addEventListener("click", createPanelImage);

  // find panelImage that was created on the page
  var panelImage = document.querySelector(".panel");

  // make clickWhenDone an event listener, alert "Are you Sure?", if so remove clickImages
  function removeClickImages (event) {
    event.preventDefault();
    var reply = confirm("Are you sure?");
    if (reply == true) {
      clickToAddImage.remove();
      clickWhenDone.remove();
    } else {

    }
  }

  clickWhenDone.addEventListener("click", removeClickImages);


// comment section
  //like link function
  var likeLink = document.querySelector(".like-link");
  var likeCount = document.querySelector(".like-count");

  likeCount.textContent = 0;

  function generatePrompt(event) {
    event.preventDefault();
    var name = prompt("Authenticate with your name:");
    if (name == "" || null) {

    } else {
      likeCount.textContent = parseInt(likeCount.textContent) + 1;
    }
  }

  // add event listener to like link
  likeLink.addEventListener("click", generatePrompt);

  //Comment function
  var commentButton = document.querySelector("#comment-button");
  var comments = document.querySelector("#comments");
  var newComment = document.querySelector("#new-comment");
  var newCommentText = document.querySelector("#new-comment-body");

  function commentPrompt(event) {
    var name2 = prompt("Authenticate with your name:");
    if (name2 == "" || null) {

    } else {
    event.preventDefault();
    var comment = document.createElement("div")
    comment.setAttribute("class", "comment");
    comment.textContent = newCommentText.value + " - " + name2;
    comments.appendChild(comment);
    newComment.reset();
    }
  }

    //add event listener to comment button
    commentButton.addEventListener("click", commentPrompt);
