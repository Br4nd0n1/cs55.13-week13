import fs from 'fs';
import path from 'path';
import got from 'got';
const url = 'https://dev-cs5513-brandon.pantheonsite.io/wp-json/twentytwentyone-child/v1/show-items-json';
const JSON_FILE = await got(url).json();

export function getGeneralsList()
 {

  return JSON_FILE.map(
    function(post) 
    {
      return {
        id: post.ID,
        name: post.post_title
      };
    }
  );
}

export function getIdList() 
{
  return JSON_FILE.map(
    function(post)
     {
      return {
        params: {
          id: post.ID.toString()
        }
      };
    }
  );  
}

export async function getPerson(idRequested)
{
  const SELECTED_PERSON = JSON_FILE.filter(
    function(obj) 
    {
      return obj.ID.toString() === idRequested;
    }
  );
  if (SELECTED_PERSON.length > 0)
  {
    return SELECTED_PERSON[0];
  } 
    return {};
}