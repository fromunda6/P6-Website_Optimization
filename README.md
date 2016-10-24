##GREG ZIMMER
##Front-End Web Developer Nanodegree(2016)
##P6 - Website Optimization

##How to test these pages with Google PageSpeed(OS=Windows):
	a. Initiate local hosting(from terminal):
		i. >> cd "mylocalpath"
		ii. Assuming Python 3 is installed, >> python -m http.server 8080
	b. Allow "tunneling", or external access to locally hosted resources 
		i. via browser, navigate to ngrok.com
		ii. download copy of executable and save it to "shallowest" level of project directory
		iii. (from 2nd instance of terminal - your first is playing a good host, remember) >> ngrok http 8080
		iv. direct Google PageSpeed to the address provided by ngrok in the terminal under heading "Forwarding",
			adding your webpage suffix to the end of that address

##My changes (prior to use of PageSpeed insights)

	a. Google Analytics script does not need to be parser-blocking as it does not affect the view of the page
		i. Solution: add "async" property to associated script tag
		ii. impact of change: reduces load time ~21ms
	b. print.css is currently render-blocking unconditionally, is only required when printing
		i. Solution: add "media:print" attribute-value to associated css link tag
		ii. impact: before/after
	
##Discovered Via PageSpeed Insights:

	A. INDEX.html - Speed optimizations
	Fixes performed:
		a). Optimize images - 
			i). simple compression and resize of images used in index.html and pizza.html performed online using 
			ii). tinypng and resize-photos, respectively; removed image metadata per dev.google recommendations
		b). Eliminate render-blocking JS and CSS (above the 'fold') -
			i). determine area "above-the-fold": pretty much all of it
			ii). CSS was inlined in order to achieve PageSpeed target, not the desired solution		
		c). leverage browser caching
			i). As I understand nothing about my server other than its port number, I am not sure I will be 
			able to leverage server-directed caching (cache-control directives, ETags) of resources by the browser 
		d). reduce server time response - same issue as above
		e). enabling GZIP compression on my server - I don't know how to do this
		f). Minified JS, HTML, and CSS
			i. brutal learning session with grunt, etc
				a). Clean install of node.js	
				b). global install of Grunt CLI
				c). Local install and execution of Grunt dependencies and packages, rspctvly
					i. uglify, cssmin and htmlmin,
			ii. within index.min.html, changed links to minified JS, pasted minified CSS			
		g). added grunt_module directory to .gitignore to make GitHub happier

	B. Pizza.html - Getting rid of Jank

		I. Optimizing JS to reduce animation times 
			a). Drastically reduced the number of pizzas being generated as a user has in view at any given moment only 20 or so background pizzas, not the 200 being animated by the onload event listener (main.js 
			b). Function that selects elements to be subject to animation per Math.sin is scanning entire DOM for elements named .mover - changed this to getElementsByClassName(mover);
			c). Optimization of UpdatePositions was done with much help from Udacity forums member mcs
				i). moved variables being calculated at each iteration out of for loop 
				ii). moved calculation of variable phase out of forLoop and into array
			d). PizzaScroller
				i). formerly an indirect calculation based on size differences, I here utilized Cameron's static sizing function changePizzaSizes

		II. General speed-oriented optimizations:
			a). Optimize Images - 
				compression and resizing of pizzeria.jpg achieved significant speed improvements
				compression of all other images 
			b). Configured viewport
			c). minified html, css and JS using Grunt 
			c). Inlined style.min.css and updated link to main.min.js
		

## Website Performance Optimization portfolio project. 

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository and inspect the code.

### Getting started



####Part 1: Optimize PageSpeed Insights score for index.html

 Some useful tips to help you get started:

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  

	```bash
  $> cd /path/to/your-project-folder
  $> python -m http.server 8080
  
	```

1. Open a browser and visit localhost:8080
. Download and install [ngrok](https://ngrok.com/) to the top-level of your project directory to make your local server accessible remotely.

  
	``` bash
  $> cd /path/to/your-project-folder
  $> ./ngrok http 8080
  
	```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

Profile, optimize, measure... and then lather, rinse, and repeat. Good luck!



####Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, you will need to: 
	modify views/js/main.js until your frames per second rate is 60 fps or higher. You will find instructive comments in main.js. 


	You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).



### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* 
[Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* 
[Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* 

[Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* 

[Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* 

[Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>
# P6-Website_Optimization
