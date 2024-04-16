<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\DemoSignup;
use App\Models\Waitlist;



class WaitlistController extends Controller
{
    public function signup(Request $request) {

        

        $validator = Validator::make($request->json()->all(), [
            'name' => 	'required|min:3|max:33',
            'email'    =>   'required|string|email|max:255|unique:waitlists|regex:/^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/ix',
          
        ]);


        if($validator->fails()) {
            return response()->json([
                'message' => $validator->messages(),
            ], 400);

        }

            $waitlist = Waitlist::create([
                // 'name'     =>  $request->json()->get('name'),
                // 'email'     =>  $request->json()->get('email'),
                'name' => $request->name,
                'email' => $request->email,
               
        ]);


        if($waitlist) {

            try{

                // $allEmails = [$waitlist->email, 'info@tosss.me'];
                // \Mail::to('info@tosss.me')->send( new DemoSignup($waitlist));
                // \Mail::to($allEmails)->send( new DemoSignup($waitlist));





                \Mail::to($waitlist->email)->send( new DemoSignup($waitlist));
                \Mail::to('info@tosss.me')->send( new DemoSignup($waitlist));


                return response()->json([
                    'success' => true,
                    'message' => 'Sign up Successful!',
                    'data' => $waitlist->toArray()
                ], 200);

            }catch (\Exception $err) {
                $waitlist->delete();
                return response()->json([
                    'message' => 'Could not send email, please try again later.',
                ], 500);

            }

        }

        return response()->json([
            'message' => 'Failed to sign up',
        ], 500);
        


        // \Mail::to('tundesalamie@gmail.com')
        // ->send(new DemoSignup());
        //     return response()->json(["message" => "Email sent successfully"]);


       



    } 
}
