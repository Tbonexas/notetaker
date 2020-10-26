# Express Note Taker

## Description:

Create an application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.  

* The following API routes should be created:

  * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

  * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

  * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

## User Story

AS A user, I want to be able to write and save notes

I WANT to be able to delete notes I've written before

SO THAT I can organize my thoughts and keep track of tasks I need to complete



## Acceptance Criteria

Application should allow users to create and save notes.

Application should allow users to view previously saved notes.

Application should allow users to delete previously saved notes.

## Demos and Screenshots:  
![image](https://user-images.githubusercontent.com/67118229/97225238-a15e3500-178f-11eb-9e56-45d6c6fde926.png)    
![image](https://user-images.githubusercontent.com/67118229/97225313-bd61d680-178f-11eb-8696-d92ae0e19948.png)  
![image](https://user-images.githubusercontent.com/67118229/97225452-e4200d00-178f-11eb-9b69-564344f0be39.png)  
[Google Drive GIFS](https://drive.google.com/file/d/1XM9FuT7A0Ab24c1qk2Doxiq3f1v-Rc3K/view)  
  
## Credits  
*Tbonexas*     
*Express.js*    
*CSS*    
*HTML*    
*Node*      
# My Information 
[LinkedIn](https://www.linkedin.com/in/todd-murdoch)    
[Portfolio](https://tbonexas.github.io/portfolio)  


