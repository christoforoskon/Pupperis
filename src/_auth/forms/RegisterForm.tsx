import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { RegisterValidationSchema } from "@/lib/validation";
import { z } from "zod";
import Loader from "@/components/shared/Loader";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const isLoading = false;

  const form = useForm<z.infer<typeof RegisterValidationSchema>>({
    resolver: zodResolver(RegisterValidationSchema),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof RegisterValidationSchema>) {
    // USER CREATION
    console.log(values);
  }

  return (
    <Form {...form}>
      <div className="sm:w-420 flex-center flex-col">
        <img
          src="/public/assets/images/dog-7497124_640.png"
          alt=""
          className="w-1/5"
        />
        <h2 className="h3-bold md:h2-bold pt-5 sm:pt-7">Create an account</h2>
        <p className="text-slate-200 small-medium md:base-regular ">
          To use Pupperis, please enter your account details
        </p>
      </div>

      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5 w-1/2 mt-4"
      >
        <FormField
          control={form.control}
          name="Username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  className="shad-input"
                  placeholder=""
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="Email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  className="shad-input"
                  placeholder=""
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="Password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  className="shad-input"
                  placeholder=""
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="shad-button_primary">
          {isLoading ? (
            <div className="flex-center gap-2">
              <Loader /> Loading...
            </div>
          ) : (
            "Register"
          )}
        </Button>
        <p className="text-small-regular text-light-2 text-center mt-2">
          Already have an account?
          <Link
            to="/sign-in"
            className="text-primary-500 text-small-semibold ml-2"
          >
            Log in
          </Link>
        </p>
      </form>
    </Form>
  );
};

export default RegisterForm;
