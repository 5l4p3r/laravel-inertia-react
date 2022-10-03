<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Inertia\Inertia;

class UserController extends Controller
{
    public function change_photo(Request $request)
    {
        $this->validate($request,[
            'file' => 'required|image|mimes:jpg,png,svg,gif,jpeg,PNG,JPG,JPEG'
        ]);
        $file = $request->file('file');
        $filename = time().".".$file->getClientOriginalExtension();
        $file->move(('images'),$filename);

        User::where('id',Auth::user()->id)->update([
            'photo' => $filename
        ]);

        if($request->oldfile != "user.png")
        {
            File::delete('images'."/".$request->oldfile);
        }
    }
}
