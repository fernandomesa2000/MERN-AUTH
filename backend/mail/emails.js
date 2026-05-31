// backend/email/emails.js
import { resend, sender } from "./resend.config.js";
import {
    VERIFICATION_EMAIL_TEMPLATE,
    PASSWORD_RESET_REQUEST_TEMPLATE,
    PASSWORD_RESET_SUCCESS_TEMPLATE,
} from "./emailTemplates.js";

export const sendVerificationEmail = async (email, verificationToken) => {

    try {
        const response = await resend.emails.send({
            from: `${sender.name} <${sender.email}>`,
            to: email,
            subject: "Verify your email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
        });

        console.log("Email sent successfully:", response);
    } catch (error) {
        console.error("Error sending verification email:", error);
        throw new Error(`Error sending verification email: ${error.message}`);
    }
};

export const sendWelcomeEmail = async (email, name) => {

    try {
        const response = await resend.emails.send({
            from: `${sender.name} <${sender.email}>`,
            to: email,
            subject: "Welcome!",
            html: `<h1>Hola ${name}, bienvenido a la app!</h1>`,
        });

        console.log("Email sent successfully", response);
    } catch (error) {
        console.error("Error sending welcome email:", error);
        throw new Error(`Error sending welcome email: ${error}`);
    }
};

export const sendPasswordResetEmail = async (email, resetURL) => {

    try {
        const response = await resend.emails.send({
            from: `${sender.name} <${sender.email}>`,
            to: email,
            subject: "Reset your password",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetLink),
        });
    } catch (error) {
        console.log(`Error sending password reset email:`, error);
        throw new Error(`Error sending password reset email: ${error}`);
    }
};

export const sendResetSuccessEmail = async (email) => {

    try {
        const response = await resend.emails.send({
            from: `${sender.name} <${sender.email}>`,
            to: email,
            subject: "Password reset successful",
            html: PASSWORD_RESET_SUCCESS_TEMPLATE,
        });

        console.log("Email sent successfully:", response);
    } catch (error) {
        console.log(`Error sending password reset email:`, error);
        throw new Error(`Error sending password reset email: ${error}`);
    }
};