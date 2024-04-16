<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactForm;
use Illuminate\Http\Request;
use App\Models\Contact;




class ContactController extends Controller
{
    public function contact(Request $request) {

        

        $validator = Validator::make($request->json()->all(), [
            'name' => 	'required|min:3|max:33',
            'email'    =>   'required|string|email|max:255|regex:/^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/ix',
            'message' => 'required'
        ]);


        if($validator->fails()) {
            return response()->json([
                'message' => $validator->messages(),
            ], 400);

        }

            $contact = Contact::create([
                'name'     =>  $request->name,
                'email'    =>  $request->email,
                'message'  =>  $request->message,
               
        ]);

        if($contact) {

            $myEmail = "info@tosss.me";

            try{

                \Mail::to($myEmail)->send( new ContactForm($contact));

                return response()->json([
                    'success' => true,
                    'message' => 'Sign up Successful!',
                    'data' => $contact->toArray()
                ], 200);


            }catch (\Exception $err){

                $contact->delete();
                return response()->json([
                    'message' => 'Message could not be sent, please try again later.',
                ], 500);

            }



            
        }

        return response()->json([
            'message' => 'Failed to send',
        ], 500);

        


       



    } 
}
