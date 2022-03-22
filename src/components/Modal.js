import React from 'react'


export default function Modal() {
    return (
        <div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel fuga adipisci placeat incidunt numquam at veritatis sapiente aliquam doloribus voluptatem!</p>



            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Launch static backdrop modal
            </button>


            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="container-fluid">
                                <div class="row">
                                    <div class="col-md-3 ms-auto">
                                        <div class="card" >
                                            <img src="" class="card-img-top" alt="..." />
                                            
                                        </div>
                                    </div>
                                    <div class="col-md-3 ms-auto">
                                        <div class="card" >
                                            <img src="..." class="card-img-top" alt="..." />
                                            
                                        </div>
                                    </div>
                                    <div class="col-md-3 ms-auto">
                                        <div class="card">
                                            <img src="..." class="card-img-top" alt="..." />
                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-3 ms-auto">
                                        <div class="card" >
                                            <img src="" class="card-img-top" alt="..." />
                                            
                                        </div>
                                    </div>
                                    <div class="col-md-3 ms-auto">
                                        <div class="card" >
                                            <img src="..." class="card-img-top" alt="..." />
                                            
                                        </div>
                                    </div>
                                    <div class="col-md-3 ms-auto">
                                        <div class="card">
                                            <img src="..." class="card-img-top" alt="..." />
                                           
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-3 ms-auto">
                                        <div class="card" >
                                            <img src="" class="card-img-top" alt="..." />
                                            
                                        </div>
                                    </div>
                                    <div class="col-md-3 ms-auto">
                                        <div class="card" >
                                            <img src="..." class="card-img-top" alt="..." />
                                            
                                        </div>
                                    </div>
                                    <div class="col-md-3 ms-auto">
                                        <div class="card">
                                            <img src="..." class="card-img-top" alt="..." />
                                            
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Understood</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}











