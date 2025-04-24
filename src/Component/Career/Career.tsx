import {
  ChevronDownIcon,
  DocumentArrowUpIcon,
} from "@heroicons/react/24/outline";
import CareerPage from "../../assets/content/content.json";
import axios from "axios";
import { useEffect, useState } from "react";
import { AllRoutes } from "../../Environment/routes";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import toast, { Toaster } from "react-hot-toast";

interface FormDetailType {
  submitbutton: string;
  formhead: string;
  formheaddesc: string;
}

interface CareerPageType {
  CareerPage: {
    Brandname: string;
    brandlogolink: string;
    CEONAME: string;
    Messagefromceo: string;
    position: string;
    personimg: string;
    FormDetail: FormDetailType;
  };
}

const Career = () => {
  const data: CareerPageType = CareerPage;
  const datas = data.CareerPage.FormDetail;
  const [loading, setLoading] = useState(false);
  const [buttonloading, setButtonloading] = useState(false);
  const [ExpirenceList, setExpirenceList] = useState<
    { _id: string; ExperienceRange: string }[]
  >([]);
  const [StateList, setStateList] = useState<
    { _id: string; StateName: string }[]
  >([]);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
  const [apiSuceesfull, setApiSuceesfull] = useState(false);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    experience: "",
    relocate: "",
    about: "",
    resumeFile: null as File | null,
  });
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid =
      formValues.firstName &&
      formValues.lastName &&
      formValues.email &&
      formValues.number &&
      formValues.country &&
      formValues.streetAddress &&
      formValues.city &&
      formValues.state &&
      formValues.experience &&
      formValues.relocate &&
      formValues.about &&
      formValues.resumeFile;

    setIsFormValid(Boolean(isValid));
  }, [formValues]);

  useEffect(() => {
    const Resourccall = async () => {
      setLoading(true);
      try {
        const response = await axios.get(AllRoutes.GET_RESOURCE);
        if (response.data.success === 1) {
          setLoading(false);
          const responseMatrix = response.data.data;
          setExpirenceList(responseMatrix.ExpirenceList);
          setStateList(responseMatrix.StateList);
          console.log("ExpirenceList", responseMatrix.ExpirenceList);
          console.log("StateList", responseMatrix.StateList);
        } else {
          console.warn("API returned success != 1");
        }
      } catch (err) {
        console.error("API error:", err);
      } finally {
        setLoading(false);
      }
    };
    Resourccall();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    // Check if any required field is empty
    const invalidField = Object.entries(formValues).find(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ([key, value]) => !value
    );

    if (invalidField) {
      const [fieldName] = invalidField;

      // Focus the corresponding form element by name
      const input = form.querySelector(`[name="${fieldName}"]`) as HTMLElement;
      if (input) {
        input.focus();
      }

      return; // Stop submission
    }
    const formData = new FormData(e.currentTarget);

    const resumeFile = formData.get("file-upload") as File;
    const validTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (resumeFile && !validTypes.includes(resumeFile.type)) {
      alert("Only PDF and DOCX files are allowed for resume upload.");
      return;
    }

    const payload = new FormData();
    payload.append("firstname", formData.get("first-name") as string);
    payload.append("lastname", formData.get("last-name") as string);
    payload.append("about", formData.get("about") as string);
    payload.append("email", formData.get("email") as string);
    payload.append("number", formData.get("number") as string);
    payload.append("country", formData.get("country") as string);
    payload.append("street", formData.get("street-address") as string);
    payload.append("city", formData.get("city") as string);
    payload.append("state", formData.get("state") as string); // state _id
    payload.append("expirence", formData.get("experience") as string); // experience _id
    payload.append("currentorg", formData.get("current-company") as string);
    payload.append("currentctc", formData.get("currentCTC") as string);
    payload.append("expectctc", formData.get("expectedCtc") as string);
    payload.append("relocate", formData.get("relocate") as string);
    payload.append(
      "retailExp",
      formData.get("retail-jewellery") === "on" ? "true" : "false"
    );
    payload.append("resumefile", resumeFile);

    try {
      setButtonloading(true);
      const response = await axios.post(`${AllRoutes.ADD_USER}`, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.data.success === 1) {
        setApiSuceesfull(true);
        setButtonloading(false);
        toast.success("Application Submited!");
      } else {
        setButtonloading(false);
        toast.error("Something went wrong Mail! on career@jewel.com");
      }
    } catch (error) {
      setButtonloading(false);
      console.error("Submission error:", error);
      toast.error("Something went wrong Mail! on career@jewel.com");
    } finally {
      setButtonloading(false);
    }
  };

  return (
    <div className="font-mono">
      {/* CEO section */}
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          {/* <img
          alt=""
          src="https://tailwindcss.com/plus-assets/img/logos/workcation-logo-indigo-600.svg"
          className="mx-auto h-12"
        /> */}
          <figure className="mt-10">
            <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
              <p>{data.CareerPage.Messagefromceo}</p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="mx-auto size-10 rounded-full"
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">
                  {data.CareerPage.CEONAME}
                </div>
                <svg
                  width={3}
                  height={3}
                  viewBox="0 0 2 2"
                  aria-hidden="true"
                  className="fill-gray-900"
                >
                  <circle r={1} cx={1} cy={1} />
                </svg>
                <div className="text-gray-600">{data.CareerPage.position}</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      {apiSuceesfull ? (
        <>
          <div className="flex flex-col items-center justify-center h-screen text-center pt-2 pb-1">
            <p className="text-lg font-semibold text-gray-700">
              Application Successfuly Submitted WE will reach you soon
            </p>
            <DotLottieReact
              src="/images/Loaders/messagesubmitted.lottie"
              loop
              autoplay
              className="w-180"
            />
          </div>
        </>
      ) : (
        <>
          {loading ? (
            <>
              {/* <img src="/images/Loaders/giphy1.gif" alt="funny gif" /> */}
              <div className="flex flex-col items-center justify-center h-screen text-center pt-2 pb-1">
                <p className="text-lg font-semibold text-gray-700">
                  One form is coming, please wait...
                </p>
                <DotLottieReact
                  src="/images/Loaders/planeLoader.lottie"
                  loop
                  autoplay
                />
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-center pb-10 px-4 sm:px-6 lg:px-8">
                <form onSubmit={handleSubmit}>
                  <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                      <h2 className="text-base/7 font-semibold text-gray-900">
                        {datas.formhead}
                      </h2>
                      <p className="mt-1 text-sm/6 text-gray-600">
                        {datas.formheaddesc}
                      </p>

                      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="col-span-full">
                          <label
                            htmlFor="about"
                            className="block text-sm/6 font-medium text-gray-900"
                          >
                            About
                          </label>
                          <div className="mt-2">
                            <textarea
                              id="about"
                              name="about"
                              rows={3}
                              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                              defaultValue={""}
                              onChange={(e) =>
                                setFormValues({
                                  ...formValues,
                                  about: e.target.value,
                                })
                              }
                            />
                          </div>
                          <p className="mt-3 text-sm/6 text-gray-600">
                            Write a few sentences about yourself.
                          </p>
                        </div>

                        {/* resume section */}
                        <div className="col-span-full">
                          <label
                            htmlFor="cover-photo"
                            className="block text-sm/6 font-medium text-gray-900"
                          >
                            Your Resume
                          </label>
                          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                            <div className="text-center">
                              <DocumentArrowUpIcon
                                aria-hidden="true"
                                className="mx-auto size-12 text-gray-300"
                              />
                              <div className="mt-4 flex text-sm/6 text-gray-600">
                                <label
                                  htmlFor="file-upload"
                                  className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                >
                                  <span>Upload a file</span>
                                  <input
                                    id="file-upload"
                                    name="file-upload"
                                    type="file"
                                    className="sr-only"
                                    accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                    onChange={(e) => {
                                      const file = e.target.files?.[0];
                                      if (file) {
                                        setFormValues({
                                          ...formValues,
                                          resumeFile: file || null,
                                        });
                                        setSelectedFileName(file.name);
                                      } else {
                                        setSelectedFileName(null);
                                      }
                                    }}
                                  />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                              </div>
                              <p className="text-xs/5 text-gray-600">
                                PDF or DOCx up to 10MB
                              </p>
                            </div>
                          </div>
                          {selectedFileName && (
                            <p className="mt-2 text-sm text-gray-700">
                              Selected file: {selectedFileName}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* personal information section  */}
                    <div className="border-b border-gray-900/10 pb-12">
                      <h2 className="text-base/7 font-semibold text-gray-900">
                        Personal Information
                      </h2>
                      <p className="mt-1 text-sm/6 text-gray-600">
                        Use a Active Email address where you can receive mail.
                      </p>

                      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                          <label
                            htmlFor="first-name"
                            className="block text-sm/6 font-medium text-gray-900"
                          >
                            First name
                          </label>
                          <div className="mt-2">
                            <input
                              id="first-name"
                              name="first-name"
                              type="text"
                              autoComplete="given-name"
                              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                              onChange={(e) =>
                                setFormValues({
                                  ...formValues,
                                  firstName: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <label
                            htmlFor="last-name"
                            className="block text-sm/6 font-medium text-gray-900"
                          >
                            Last name
                          </label>
                          <div className="mt-2">
                            <input
                              id="last-name"
                              name="last-name"
                              type="text"
                              autoComplete="family-name"
                              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                              onChange={(e) =>
                                setFormValues({
                                  ...formValues,
                                  lastName: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-4">
                          <label
                            htmlFor="email"
                            className="block text-sm/6 font-medium text-gray-900"
                          >
                            Email address
                          </label>
                          <div className="mt-2">
                            <input
                              id="email"
                              name="email"
                              type="email"
                              autoComplete="email"
                              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                              onChange={(e) =>
                                setFormValues({
                                  ...formValues,
                                  email: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-4">
                          <label
                            htmlFor="number"
                            className="block text-sm/6 font-medium text-gray-900"
                          >
                            Number
                          </label>
                          <div className="mt-2">
                            <input
                              id="number"
                              name="number"
                              type="number"
                              autoComplete="number"
                              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                              onChange={(e) =>
                                setFormValues({
                                  ...formValues,
                                  number: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <label
                            htmlFor="country"
                            className="block text-sm/6 font-medium text-gray-900"
                          >
                            Country
                          </label>
                          <div className="mt-2 grid grid-cols-1">
                            <select
                              id="country"
                              name="country"
                              autoComplete="country-name"
                              className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                              onChange={(e) =>
                                setFormValues({
                                  ...formValues,
                                  country: e.target.value,
                                })
                              }
                            >
                              <option>India</option>
                              <option>Nepal</option>
                            </select>
                            <ChevronDownIcon
                              aria-hidden="true"
                              className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                            />
                          </div>
                        </div>

                        <div className="col-span-full">
                          <label
                            htmlFor="street-address"
                            className="block text-sm/6 font-medium text-gray-900"
                          >
                            Street address
                          </label>
                          <div className="mt-2">
                            <input
                              id="street-address"
                              name="street-address"
                              type="text"
                              autoComplete="street-address"
                              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                              onChange={(e) =>
                                setFormValues({
                                  ...formValues,
                                  streetAddress: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-2 sm:col-start-1">
                          <label
                            htmlFor="city"
                            className="block text-sm/6 font-medium text-gray-900"
                          >
                            City
                          </label>
                          <div className="mt-2">
                            <input
                              id="city"
                              name="city"
                              type="text"
                              autoComplete="address-level2"
                              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                              onChange={(e) =>
                                setFormValues({
                                  ...formValues,
                                  city: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-2">
                          <label
                            htmlFor="region"
                            className="block text-sm/6 font-medium text-gray-900"
                          >
                            State / Province
                          </label>
                          <div className="mt-2">
                            <select
                              id="state"
                              name="state"
                              className=" block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
                              onChange={(e) =>
                                setFormValues({
                                  ...formValues,
                                  state: e.target.value,
                                })
                              }
                            >
                              <option value="">Select State</option>
                              {StateList.map((state) => (
                                <option key={state._id} value={state._id}>
                                  {state.StateName}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="sm:col-span-2">
                          <label
                            htmlFor="experience"
                            className="block text-sm font-medium text-gray-900"
                          >
                            Total Years of Experience
                          </label>
                          <div className="mt-2">
                            <select
                              id="experience"
                              name="experience"
                              className="mt-[12px] block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
                              onChange={(e) =>
                                setFormValues({
                                  ...formValues,
                                  experience: e.target.value,
                                })
                              }
                            >
                              <option value="">Select experience</option>
                              {ExpirenceList.map((exp) => (
                                <option key={exp._id} value={exp._id}>
                                  {exp.ExperienceRange}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="sm:col-span-4">
                          <label
                            htmlFor="current-company"
                            className="block text-sm/6 font-medium text-gray-900"
                          >
                            Current Orgination
                          </label>
                          <div className="mt-2">
                            <input
                              id="current-company"
                              name="current-company"
                              type="text"
                              autoComplete="current-company"
                              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-2 sm:col-start-1">
                          <label
                            htmlFor="currentCTC"
                            className="block text-sm/6 font-medium text-gray-900"
                          >
                            Current CTC
                          </label>
                          <div className="mt-2">
                            <input
                              id="currentCTC"
                              name="currentCTC"
                              type="text"
                              autoComplete="address-level2"
                              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-2">
                          <label
                            htmlFor="expectedCtc"
                            className="block text-sm/6 font-medium text-gray-900"
                          >
                            Expected CTC
                          </label>
                          <div className="mt-2">
                            <input
                              id="expectedCtc"
                              name="expectedCtc"
                              type="text"
                              autoComplete="expectedCtc"
                              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                          </div>
                        </div>
                        <div className="sm:col-span-2">
                          <label
                            htmlFor="relocate"
                            className="block text-sm/6 font-medium text-gray-900"
                          >
                            Ready to Relocate
                          </label>
                          <div className="mt-2 flex space-x-4">
                            <label className="inline-flex items-center">
                              <input
                                type="radio"
                                name="relocate"
                                value="yes"
                                className="mr-2"
                                onChange={(e) =>
                                  setFormValues({
                                    ...formValues,
                                    relocate: e.target.value,
                                  })
                                }
                              />
                              Yes
                            </label>
                            <label className="inline-flex items-center">
                              <input
                                type="radio"
                                name="relocate"
                                value="no"
                                className="mr-2"
                                onChange={(e) =>
                                  setFormValues({
                                    ...formValues,
                                    relocate: e.target.value,
                                  })
                                }
                              />
                              No
                            </label>
                          </div>
                        </div>

                        <div className="sm:col-span-4 ">
                          <div className="flex items-center space-x-3">
                            <input
                              id="retail-jewellery"
                              name="retail-jewellery"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <label
                              htmlFor="retail-jewellery"
                              className="block text-sm font-medium text-gray-900"
                            >
                              Are you experienced in retail jewellery?
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button
                      type="button"
                      className="text-sm/6 font-semibold text-gray-900"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className={`rounded-md px-3 py-2 text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2
                      ${
                        buttonloading || !isFormValid
                          ? "bg-gray-400 hover:bg-gray-400 cursor-not-allowed"
                          : "bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600"
                      }`}
                      
                    >
                      {buttonloading ? (
                        <FontAwesomeIcon
                          icon={faSpinner}
                          spin
                          className="h-5 w-5 text-white mr-3"
                        />
                      ) : (
                        <p>Save</p>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </>
          )}
        </>
      )}
      <Toaster position="top-right" />
    </div>
  );
};

export default Career;
