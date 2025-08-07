export default () => {
    const supabase = useSupabaseClient();

    const useSignUp = async (body: { email: string; password: string }) => {
        const { error } = await supabase.auth.signUp({
            email: body.email,
            password: body.password,
            options: {
                emailRedirectTo: `${useRuntimeConfig().public.domain}/check-your-email`
            }
        });

        if (error) {
            throw createError({
                statusCode: 400,
                statusMessage: error.message
            });
        }
    };

    const useSignInWithPassword = async (body: { email: string; password: string }) => {
        const { error } = await supabase.auth.signInWithPassword(body)

        if (error) {
            throw createError({
                statusCode: 400,
                statusMessage: error.message
            });
        }
    }

    return {
        useSignUp,
        useSignInWithPassword
    };
};
