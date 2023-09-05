import type { RequestHandler } from "@sveltejs/kit";

import { json, fail } from "@sveltejs/kit";

export const POST: RequestHandler = async ({request}) => {
  const {body} = request;
  if (!body) {
    throw fail(400);
  }
  const reader = body.getReader();
  const {value} = await reader.read();
  const bodyData = new TextDecoder("utf-8").decode(value);
  const data = JSON.parse(bodyData);

  let download =
			'---\n' +
			`title: ${data.titulo_main}\n` +
			`description: ${data.descricao}\n` +
			`pub_date: ${new Date().toLocaleDateString()}\n` +
			'---\n\n'
		// remove titulo_main and descricao from data
		delete data.titulo_main
		delete data.descricao

		// go through each key in data
		for (const key in data) {
			// if it's a titulo add ## before
			if (key.includes('titulo')) {
				download += `## ${data[key]}\n\n`
			}
			// if it's a subtitulo add ### before
			else if (key.includes('subtitulo')) {
				download += `### ${data[key]}\n\n`
			} else download += `${data[key]}\n\n`
		}


  return json({body: download})
  
};