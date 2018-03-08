# URL-Monitor
> An application which monitors multiple given URL's asynchronously

## How to run locally :-

1.  Clone this repo

   ```
   git clone https://github.com/alphadose/URL-Monitor ~/URL-Monitor
   ```
   
2.  Install all dependencies

   ```
   cd ~/URL-Monitor && npm install
   ```
   
3.  Run the REST API server

 ```
 npm start
```
    
## How to use :-
> Use either [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en) or curl to test the endpoints for best results

### Curl will be used for the examples below

  ## POST /
  > Will create a new url for monitoring


    curl -X POST \
      http://localhost:3000/ \
      -H 'cache-control: no-cache' \
      -H 'content-type: application/x-www-form-urlencoded' \
      -d 'url=https%3A%2F%2Fwww.google.co.in%2F&method=GET'


  ## GET / ID
  > Will retrieve the URL information, the last 100 response times of the URL as an array,
     the 50th, 75th, 95th, and 99th percentile of the response times


    curl -X GET \
      http://localhost:3000/ID


  ## PUT / ID
  > Will edit the URL information previously entered so as to continue monitoring using
      the new URL information
    

    curl -X PUT \
      http://localhost:3000/ID \
      -H 'cache-control: no-cache' \
      -H 'content-type: application/x-www-form-urlencoded' \
      -d 'url=https%3A%2F%2Fwww.mangareader.net%2F&method=post'


  ## DELETE / ID
  > Will delete all information for that ID including monitoring data
    

    curl -X DELETE \
      http://localhost:3000/ID \
      -H 'cache-control: no-cache'


  ## GET /
  > Will retrieve all information of every url being monitored
    
 
    curl http://localhost:3000/

<br>

The form-parameters you can use when sending a request are :-

* url
* data
* headers
* method

