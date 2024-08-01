import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQSection() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-8 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 text-center mb-6">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl font-medium text-gray-800 dark:text-gray-200">
              What is a compute hour?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 dark:text-gray-300">
              Compute hour is the metric for compute usage in Neon. The quick
              math: [compute hours] = [compute size] x [hours your compute
              runs]. Each pricing plan includes a certain number of compute
              hours; how quickly you consume these hours depends on the size of
              your compute and how long it runs. Once you exceed the allocated
              amount of compute hours, you'll be billed for overages in a given
              month.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl font-medium text-gray-800 dark:text-gray-200">
              How does billing work?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 dark:text-gray-300">
              In Neon, you are charged a monthly fee (corresponding to your
              pricing plan) plus any additional compute and/or storage usage
              over the limits included in your plan. For example, the Launch
              plan includes 300 compute-hours of compute usage; if you consume
              320 compute-hours in a month, you will be billed additionally for
              20 compute-hours.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl font-medium text-gray-800 dark:text-gray-200">
              When will I be billed?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 dark:text-gray-300">
              Neon bills for the past month's usage at the beginning of each
              calendar month. For more information, see Manage billing.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-xl font-medium text-gray-800 dark:text-gray-200">
              How many compute hours will it take to run my workload?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 dark:text-gray-300">
              You can get a good idea by estimating how many hours your
              databases run, and at which compute size. For example: imagine
              you’re running a 2 CPU, 8 GB RAM database for 2 hours a day (or 62
              hours per month). This equals [2 CU * 62 hours] = 124 compute
              hours per month.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-xl font-medium text-gray-800 dark:text-gray-200">
              How can I control my costs with autoscaling?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 dark:text-gray-300">
              When enabling autoscaling, you will set a maximum autoscaling
              limit (e.g. 2 CU) that will act as a de-facto cost limit.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="text-xl font-medium text-gray-800 dark:text-gray-200">
              How is storage charged in Neon?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 dark:text-gray-300">
              Neon implements a unique storage engine that enables database
              branching on copy-on-write, without duplicate storage. You can
              create instant database copies (database branches) without adding
              to the storage bill. Since Neon retains database history, the size
              of storage for a Neon project will be calculated as the size of
              your tables plus the WAL up to the configurable history retention
              period. Read more in our docs.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger className="text-xl font-medium text-gray-800 dark:text-gray-200">
              Do I get a notification if I am approaching my usage limits?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 dark:text-gray-300">
              Yes, we display your usage consumption in the Neon admin console
              and we will also email you when you’re getting close.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger className="text-xl font-medium text-gray-800 dark:text-gray-200">
              Why are we limited to 500 branches per project?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 dark:text-gray-300">
              Neon implements usage limits for branching in order to prevent
              potential abuse of the service which can negatively impact other
              users. For customers seeking higher limits please contact
              customer-success@neon.tech.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
