import React, { useState } from 'react';
import { format } from 'date-fns';
import { toast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { CalendarIcon } from '@radix-ui/react-icons';
import { Label } from '@/components/CustomInput/Label';
import { Input } from '@/components/CustomInput/Input';
import Section from '@/components/section/Section';
import { Link, useNavigate } from 'react-router-dom';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useAuth } from '@/context/AuthContext';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import svg from '../../assets/placeholder.svg';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Loader from '../loader/Loader';
import { useToast } from '@/components/ui/use-toast';
import Spline from '@splinetool/react-spline';

const TermsDialog = () => (
  <Dialog>
    <DialogTrigger asChild>
      <span className='text-blue-400 cursor-pointer hover:text-blue-500'>
        Terms of Use and Privacy Policy
      </span>
    </DialogTrigger>
    <DialogContent className='max-h-[80vh] overflow-y-auto'>
      <DialogHeader>
        <DialogTitle className='dark:text-white'>
          Terms of Use and Privacy Policy
        </DialogTitle>
      </DialogHeader>
      <DialogDescription>
        <div className='space-y-4'>
          <h1>Terms and Conditions for FnPersona</h1>

          <h2>Introduction</h2>

          <p>
            These Website Standard Terms and Conditions written on this webpage
            shall manage your use of our website, Persona Website accessible at
            www.fnpersona.in.
          </p>

          <p>
            These Terms will be applied fully and affect to your use of this
            Website. By using this Website, you agreed to accept all terms and
            conditions written in here. You must not use this Website if you
            disagree with any of these Website Standard Terms and Conditions.
            These Terms and Conditions have been generated with the help of the{' '}
            <a href='https://www.termsandcondiitionssample.com'>
              Terms And Conditiions Sample Generator
            </a>
            .
          </p>

          <p>
            Minors or people below 18 years old are not allowed to use this
            Website.
          </p>

          <h2>Intellectual Property Rights</h2>

          <p>
            Other than the content you own, under these Terms, FnPersona and/or
            its licensors own all the intellectual property rights and materials
            contained in this Website.
          </p>

          <p>
            You are granted limited license only for purposes of viewing the
            material contained on this Website.
          </p>

          <h2>Restrictions</h2>

          <p>You are specifically restricted from all of the following:</p>

          <ul>
            <li>publishing any Website material in any other media;</li>
            <li>
              selling, sublicensing and/or otherwise commercializing any Website
              material;
            </li>
            <li>publicly performing and/or showing any Website material;</li>
            <li>
              using this Website in any way that is or may be damaging to this
              Website;
            </li>
            <li>
              using this Website in any way that impacts user access to this
              Website;
            </li>
            <li>
              using this Website contrary to applicable laws and regulations, or
              in any way may cause harm to the Website, or to any person or
              business entity;
            </li>
            <li>
              engaging in any data mining, data harvesting, data extracting or
              any other similar activity in relation to this Website;
            </li>
            <li>
              using this Website to engage in any advertising or marketing.
            </li>
          </ul>

          <p>
            Certain areas of this Website are restricted from being access by
            you and FnPersona may further restrict access by you to any areas of
            this Website, at any time, in absolute discretion. Any user ID and
            password you may have for this Website are confidential and you must
            maintain confidentiality as well.
          </p>

          <h2>Your Content</h2>

          <p>
            In these Website Standard Terms and Conditions, "Your Content" shall
            mean any audio, video text, images or other material you choose to
            display on this Website. By displaying Your Content, you grant
            FnPersona a non-exclusive, worldwide irrevocable, sub licensable
            license to use, reproduce, adapt, publish, translate and distribute
            it in any and all media.
          </p>

          <p>
            Your Content must be your own and must not be invading any
            third-party's rights. FnPersona reserves the right to remove any of
            Your Content from this Website at any time without notice.
          </p>

          <h2>No warranties</h2>

          <p>
            This Website is provided "as is," with all faults, and FnPersona
            express no representations or warranties, of any kind related to
            this Website or the materials contained on this Website. Also,
            nothing contained on this Website shall be interpreted as advising
            you.
          </p>

          <h2>Limitation of liability</h2>

          <p>
            In no event shall FnPersona, nor any of its officers, directors and
            employees, shall be held liable for anything arising out of or in
            any way connected with your use of this Website whether such
            liability is under contract.  FnPersona, including its officers,
            directors and employees shall not be held liable for any indirect,
            consequential or special liability arising out of or in any way
            related to your use of this Website.
          </p>

          <h2>Indemnification</h2>

          <p>
            You hereby indemnify to the fullest extent FnPersona from and
            against any and/or all liabilities, costs, demands, causes of
            action, damages and expenses arising in any way related to your
            breach of any of the provisions of these Terms.
          </p>

          <h2>Severability</h2>

          <p>
            If any provision of these Terms is found to be invalid under any
            applicable law, such provisions shall be deleted without affecting
            the remaining provisions herein.
          </p>

          <h2>Variation of Terms</h2>

          <p>
            FnPersona is permitted to revise these Terms at any time as it sees
            fit, and by using this Website you are expected to review these
            Terms on a regular basis.
          </p>

          <h2>Assignment</h2>

          <p>
            The FnPersona is allowed to assign, transfer, and subcontract its
            rights and/or obligations under these Terms without any
            notification. However, you are not allowed to assign, transfer, or
            subcontract any of your rights and/or obligations under these Terms.
          </p>

          <h2>Entire Agreement</h2>

          <p>
            These Terms constitute the entire agreement between FnPersona and
            you in relation to your use of this Website, and supersede all prior
            agreements and understandings.
          </p>

          <h2>Governing Law & Jurisdiction</h2>

          <p>
            These Terms will be governed by and interpreted in accordance with
            the laws of the State of af, and you submit to the non-exclusive
            jurisdiction of the state and federal courts located in af for the
            resolution of any disputes.
          </p>
        </div>
      </DialogDescription>
    </DialogContent>
  </Dialog>
);

export function SignupFormDemo() {
  const { login } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    dob: null,
    timezone: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, dob: date });
  };

  const handleTimezoneChange = (value) => {
    setFormData({ ...formData, timezone: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted', formData);
      toast({
        title: 'You submitted the following values:',
        description: (
          <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
            <code className='text-white'>
              {JSON.stringify(formData, null, 2)}
            </code>
          </pre>
        ),
      });
    }
  };

  const validateForm = () => {
    if (
      !formData.firstname ||
      !formData.lastname ||
      !formData.email ||
      !formData.password ||
      !formData.dob ||
      !formData.timezone
    ) {
      toast({
        variant: 'destructive',
        title: 'Validation Error',
        description: 'All fields are required, including timezone.',
      });
      return false;
    }
    return true;
  };

  const handleNavigate = () => {
    setTimeout(() => {
      setLoading(false);
      navigate('/dashboard/lobby');
    }, 1000);
  };

  const handleSignupSuccess = (credentialResponse) => {
    setLoading(true);
    const result = jwtDecode(credentialResponse.credential);
    login(result);
    handleNavigate();
  };

  const handleSignupError = () => {
    console.log('Sign Up Failed');
    setLoading(false);
  };

  return (
    <Section className=''>
      <div className='w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[700px]'>
        <div className='flex items-center justify-center py-12'>
          <div className='mx-auto grid w-[90%] max-w-[480px] gap-6 border border-white/20 p-5 rounded-lg'>
            <div className='grid gap-2 text-center'>
              <h2 className='font-semibold text-2xl text-neutral-800 dark:text-neutral-200'>
                Welcome to FnPersona
              </h2>
              <p className='text-neutral-700 text-sm max-w-sm mt-2 text-center mx-auto dark:text-neutral-400'>
                SignUp to FnPersona to manage your Finance solutions
              </p>
            </div>
            <form className='my-2 space-y-8' onSubmit={handleSubmit}>
              <div className='flex flex-col md:flex-row gap-5 mb-4'>
                <LabelInputContainer>
                  <Label htmlFor='firstname'>First name</Label>
                  <Input
                    id='firstname'
                    name='firstname'
                    placeholder='Tyler'
                    type='text'
                    value={formData.firstname}
                    onChange={handleChange}
                  />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor='lastname'>Last name</Label>
                  <Input
                    id='lastname'
                    name='lastname'
                    placeholder='Durden'
                    type='text'
                    value={formData.lastname}
                    onChange={handleChange}
                  />
                </LabelInputContainer>
              </div>
              <LabelInputContainer className='mb-4'>
                <Label htmlFor='email'>Email Address</Label>
                <Input
                  id='email'
                  name='email'
                  placeholder='projectmayhem@fc.com'
                  type='email'
                  value={formData.email}
                  onChange={handleChange}
                />
              </LabelInputContainer>
              <LabelInputContainer className='mb-4'>
                <Label htmlFor='password'>Password</Label>
                <Input
                  id='password'
                  name='password'
                  placeholder='••••••••'
                  type='password'
                  value={formData.password}
                  onChange={handleChange}
                />
              </LabelInputContainer>

              <div className='flex flex-col'>
                <Label htmlFor='dob'>Date of birth</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={'outline'}
                      className={`w-full mt-2 pl-3 text-left font-normal ${
                        !formData.dob && 'text-muted-foreground'
                      }`}
                    >
                      {formData.dob ? (
                        format(formData.dob, 'PPP')
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className='w-auto p-0 bg-white bg-opacity-10 dark:bg-black dark:bg-opacity-10 backdrop-blur-lg border border-black border-opacity-30 dark:border-white dark:border-opacity-30 text-black dark:text-white rounded-lg z-50 '
                    align='start'
                  >
                    <Calendar
                      mode='single'
                      selected={formData.dob}
                      onSelect={handleDateChange}
                      className='rounded-md border'
                      disabled={(date) =>
                        date > new Date() || date < new Date('1900-01-01')
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <p className='text-[12px] text-neutral-600 text-center mt-2'>
                  Your date of birth is used to calculate your age.
                </p>
              </div>
              <div>
                <Select onValueChange={handleTimezoneChange}>
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder='Select a timezone' />
                  </SelectTrigger>
                  <SelectContent className='bg-white bg-opacity-10 dark:bg-black dark:bg-opacity-10 backdrop-blur-lg border border-black border-opacity-30 dark:border-white dark:border-opacity-30 text-black dark:text-white rounded-lg'>
                    <SelectGroup>
                      <SelectLabel>North America</SelectLabel>
                      <SelectItem value='est'>
                        Eastern Standard Time (EST)
                      </SelectItem>
                      <SelectItem value='cst'>
                        Central Standard Time (CST)
                      </SelectItem>
                      <SelectItem value='mst'>
                        Mountain Standard Time (MST)
                      </SelectItem>
                      <SelectItem value='pst'>
                        Pacific Standard Time (PST)
                      </SelectItem>
                      <SelectItem value='akst'>
                        Alaska Standard Time (AKST)
                      </SelectItem>
                      <SelectItem value='hst'>
                        Hawaii Standard Time (HST)
                      </SelectItem>
                    </SelectGroup>
                    <SelectGroup>
                      <SelectLabel>Europe & Africa</SelectLabel>
                      <SelectItem value='gmt'>
                        Greenwich Mean Time (GMT)
                      </SelectItem>
                      <SelectItem value='cet'>
                        Central European Time (CET)
                      </SelectItem>
                      <SelectItem value='eet'>
                        Eastern European Time (EET)
                      </SelectItem>
                      <SelectItem value='west'>
                        Western European Summer Time (WEST)
                      </SelectItem>
                      <SelectItem value='cat'>
                        Central Africa Time (CAT)
                      </SelectItem>
                      <SelectItem value='eat'>
                        East Africa Time (EAT)
                      </SelectItem>
                    </SelectGroup>
                    <SelectGroup>
                      <SelectLabel>Asia</SelectLabel>
                      <SelectItem value='msk'>Moscow Time (MSK)</SelectItem>
                      <SelectItem value='ist'>
                        India Standard Time (IST)
                      </SelectItem>
                      <SelectItem value='cst_china'>
                        China Standard Time (CST)
                      </SelectItem>
                      <SelectItem value='jst'>
                        Japan Standard Time (JST)
                      </SelectItem>
                      <SelectItem value='kst'>
                        Korea Standard Time (KST)
                      </SelectItem>
                      <SelectItem value='ist_indonesia'>
                        Indonesia Central Standard Time (WITA)
                      </SelectItem>
                    </SelectGroup>
                    <SelectGroup>
                      <SelectLabel>Australia & Pacific</SelectLabel>
                      <SelectItem value='awst'>
                        Australian Western Standard Time (AWST)
                      </SelectItem>
                      <SelectItem value='acst'>
                        Australian Central Standard Time (ACST)
                      </SelectItem>
                      <SelectItem value='aest'>
                        Australian Eastern Standard Time (AEST)
                      </SelectItem>
                      <SelectItem value='nzst'>
                        New Zealand Standard Time (NZST)
                      </SelectItem>
                      <SelectItem value='fjt'>Fiji Time (FJT)</SelectItem>
                    </SelectGroup>
                    <SelectGroup>
                      <SelectLabel>South America</SelectLabel>
                      <SelectItem value='art'>Argentina Time (ART)</SelectItem>
                      <SelectItem value='bot'>Bolivia Time (BOT)</SelectItem>
                      <SelectItem value='brt'>Brasilia Time (BRT)</SelectItem>
                      <SelectItem value='clt'>
                        Chile Standard Time (CLT)
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              {loading && <Loader />}
              <button
                className='bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]'
                type='submit'
              >
                Sign up &rarr;
                <BottomGradient />
              </button>
            </form>
            <div className='bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent h-[1px] w-full' />
            <div className='flex flex-col space-y-4'>
              <div className='text-center mx-auto'>
                <GoogleLogin
                  buttonText='Sign Up'
                  className='sm:w-600'
                  onSuccess={handleSignupSuccess}
                  onError={handleSignupError}
                />
              </div>
              <p className='text-sm text-center'>
                By clicking the button above, you agree to our <br />{' '}
                <TermsDialog />
              </p>
              <p className='text-sm text-center'>
                Already have an account?{' '}
                <Link
                  to='/signin'
                  className='text-blue-400 cursor-pointer hover:text-blue-500'
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className='hidden lg:block bg-muted'>
          {/* <img
            src={svg}
            alt='image'
            width='1920'
            height='1080'
            className='h-full w-full object-cover dark:brightness-[0.2] dark:grayscale'
          /> */}
          <Spline scene='https://prod.spline.design/khbVxCRPxA2xpyPw/scene.splinecode' />
        </div>
      </div>
    </Section>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className='group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent' />
      <span className='group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent' />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={`flex flex-col space-y-2 w-full ${className}`}>
      {children}
    </div>
  );
};
