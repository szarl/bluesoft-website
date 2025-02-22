import { ActionError, defineAction } from "astro:actions";
import { z } from 'astro:schema';
import { Resend } from "resend";

console.log(import.meta.env.SECRET_RESEND_API_KEY)
const resend = new Resend(import.meta.env.SECRET_RESEND_API_KEY);

export const server = {
  send: defineAction({
    input: z.object({
      name: z.string(),
      email: z.string().email(),
      message: z.string().min(5),
    }),
    accept: "form",
    handler: async (input) => {
      const { data, error } = await resend.emails.send({
        from: 'BlueSoft kontakt <kontakt-bluesoft@resend.dev>',
        to: ["karolrut123@gmail.com"],
        subject: "Hello world - this is test 1",
        html: `<strong>email from: ${input.email} ${input.name}</strong> <br> <p>${input.message}</p>`,
      });

      if (error) {
        console.log('Error: ', error);
        throw new ActionError({
          code: "BAD_REQUEST",
          message: 'Nastąpił błąd poczas wysyłania wiadomości. Spróbuj skontakować się z nami bezpośrednio.',
        });
      }

      return data;
    },
  }),
};