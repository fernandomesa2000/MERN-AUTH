import { Resend } from 'resend';

const resend = new Resend('re_BJMZgiqo_Pu6p7NU4oBHZ4skfUrqsbEyK');

(async function () {
    const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['juan.bedoyame@amigo.edu.co'],
        subject: 'PILLÁ PAPÁ',
        html: '<strong>It works!</strong>',
    });

    if (error) {
        return console.error({ error });
    }

    console.log({ data });
})();