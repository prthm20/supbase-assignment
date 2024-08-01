import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <Card className="h-full  max-w-md relative bg-white shadow-lg rounded-lg">
      <CardContent className="grid gap-6 p-6 relative z-10">
        <div className="grid gap-2">
          <div className="text-2xl font-bold text-gray-800">Scale</div>
          <div className="text-4xl font-bold text-gray-800">$69 /month</div>
        </div>
        <Button className="w-full bg-gray-800 text-white hover:bg-gray-700 mt-4">
          Get started
        </Button>
        <div className="grid gap-4">
          <div className="font-semibold text-gray-800">Get started</div>
          <p className="text-gray-600">
            Full platform access for scaling production workloads.
          </p>
        </div>
        <div className="grid gap-4">
          <div className="flex items-center gap-3">
            <DatabaseIcon className="w-6 h-6 text-gray-800 icon-pop" />
            <div>
              <div className="font-semibold text-gray-800">50 GiB storage</div>
              <p className="text-gray-600">included</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ClockIcon className="w-6 h-6 text-gray-800 icon-pop" />
            <div>
              <div className="font-semibold text-gray-800">750 compute hours</div>
              <p className="text-gray-600">included</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <UsersIcon className="w-6 h-6 text-gray-800 icon-pop" />
            <div>
              <div className="font-semibold text-gray-800">Priority support</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <BoltIcon className="w-6 h-6 text-gray-800 icon-pop" />
            <div>
              <div className="font-semibold text-gray-800">
                Autoscaling up to 10 CU
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ClockIcon className="w-6 h-6 text-gray-800 icon-pop" />
            <div>
              <div className="font-semibold text-gray-800">
                Point-in-time restore (30 days)
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <UsersIcon className="w-6 h-6 text-gray-800 icon-pop" />
            <div>
              <div className="font-semibold text-gray-800">
                Organization accounts
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ShieldIcon className="w-6 h-6 text-gray-800 icon-pop" />
            <div>
              <div className="font-semibold text-gray-800">IP Allow rules</div>
            </div>
          </div>
        </div>
        
      </CardContent>
    </Card>
  );
}

function BoltIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon-pop"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

function ClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon-pop"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function DatabaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon-pop"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}

function ShieldIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon-pop"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  );
}

function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon-pop"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon-pop"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
