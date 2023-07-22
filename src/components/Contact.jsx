import Input from "./Input";
import { useForm, FormProvider } from "react-hook-form";

const Contact = () => {
    const method = useForm({
        defaultValues: {
            name: null,
            email: null,
            message: null,
        },
    });

    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <div className="lg:px-40 lg:py-20 md:px-14 md:py-10 px-4 py-4 flex flex-col items-center justify-center">
            <h2 className="text-xl uppercase font-semibold my-5">contact us</h2>
            <FormProvider {...method}>
                <form onSubmit={method.handleSubmit(onSubmit)} noValidate className="w-full max-w-lg">
                    {/* name */}
                    <Input id="name" type="text" label="Name" rule={{ required: { value: true, message: "This field is required" } }} errors={method.formState.errors.name} />
                    {/* email */}
                    <Input
                        id="email"
                        type="email"
                        label="Email"
                        rule={{
                            required: { value: true, message: "This field is required" },
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "invalid email address",
                            },
                        }}
                        errors={method.formState.errors.email}
                    />
                    {/* message */}
                    <div className="flex flex-col flex-1 gap-y-1 mt-3">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6" className="px-3 py-2 border border-zinc-600 flex-1 w-full" {...method.register("message", { required: { value: true, message: "This field is required" } })}></textarea>
                        {method.formState.errors.message && <small className="text-sm text-red-600">{method.formState.errors.message.message}</small>}
                    </div>
                    <button type="submit" className="px-3 py-2 text-white bg-[#5696c2] hover:bg-[#4889b4] flex-1 w-full mt-3">
                        Submit
                    </button>
                </form>
            </FormProvider>
        </div>
    );
};

export default Contact;
