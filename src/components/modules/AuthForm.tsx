import { AuthFormProps } from "@/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AuthForm = ({
  error,
  loading,
  isSignUp,
  formData,
  changeHandler,
  submitHandler,
  toggleAuthMode,
}: AuthFormProps) => {
  return (
    <form onSubmit={submitHandler} className="space-y-4">
      {error && <p className="text-red-500 text-sm">{error}</p>}

      {isSignUp && (
        <div>
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            type="text"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={changeHandler}
            required
          />
        </div>
      )}

      <div>
        <Label htmlFor="username">Username</Label>
        <Input
          id="username"
          type="text"
          placeholder="Enter your username"
          value={formData.username}
          onChange={changeHandler}
          required
        />
      </div>

      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={changeHandler}
          required
        />
      </div>

      <div className="flex justify-between items-center">
        <Button type="submit" variant="default" disabled={loading}>
          {loading ? "Processing..." : isSignUp ? "Sign Up" : "Sign In"}
        </Button>
        <Button variant="link" type="button" onClick={toggleAuthMode}>
          {isSignUp ? "Already have an account?" : "Create an account"}
        </Button>
      </div>
    </form>
  );
};

export default AuthForm;
