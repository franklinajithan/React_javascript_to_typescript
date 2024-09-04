import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { FiList } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import Header from '../../layouts/Header';
import HeaderComponents from '@/elements/HeaderSection';
import CardTitle from '@/elements/CardTitle';
import InputField from '@/elements/InputField';
import SelectField from '@/elements/SelectField';
import { category } from '../../data/constants';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { Form } from '@/components/ui/form';
import { categoryFormSchema } from '@/lib/utils';
import CheckboxField from '@/elements/CheckboxField';
import LabelField from '@/elements/LabelField';
import TreeView from '@/components/ui/treeView';
import { addCategory, addCategoryById, getCategory } from '@/service/category.service';
import { debug } from 'console';
import { ThemeProvider } from '@mui/material';
import theme from '@/elements/GridTheme';
import { DataGrid, GridColDef, GridRowSelectionModel, GridToolbar } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { CardContent } from '@/components/ui/card';
import { getBrand } from '@/service/brand.service';



const Brand = () => {

    const { t } = useTranslation('global');
    const [skin, setSkin] = useState(localStorage.getItem('skin-mode') ? 'dark' : '');
    const [isLoading, setIsLoading] = useState(false);
    const [rowSelectionModel, setRowSelectionModel] =
        React.useState<GridRowSelectionModel>([]);
        const [isOpenGrid, setIsOpenGrid] = useState(true);
        const toggleGridCardBody = () => {
            setIsOpenGrid(!isOpenGrid);
        };

    const [rows, setRows] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const result = await getBrand();
                if (result.status !== 200) {
                    console.error(result.data);
                    return;
                };

                setRows(result.data.data);



            } catch (e) {
                console.error(e);
            } finally {
             
            }
        };

        fetchUser();
    }, []);





    
    const columns: GridColDef[] = [
        { field: 'brand_name', headerName: 'Name', flex: 1 },
        { field: 'brand_description', headerName: 'Description', flex: 1 },
        { field: 'brand_status', headerName: 'Status', flex: 1 },
        { field: 'brand_website', headerName: 'Website', flex: 1 },
        { field: 'brand_image', headerName: 'Image', flex: 1 },
      
    ];

    const handleRedirect = () => {
        navigate('/product/new-brand'); // Redirect to the desired path
    };


    return (
        <>
            <Header onSkin={setSkin} />
            <div className="main main-app p-lg-1">
                <div className="min-h-screen bg-gray-50">
                    <HeaderComponents icon={FiList} title="Brand" />
                    {/* <Card className="card-one mt-2">
                        <CardTitle title="Brand Grid" />
                        <Card.Body>
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div>
                                    <Form {...form}>
                                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                          

                                        </form>
                                    </Form> 

                                </div>
                                
                            </div>
                        </Card.Body>
                    </Card> */}

                    <Card className="card-one mt-2">
                        <CardTitle title="User Grid" onToggle={toggleGridCardBody} isOpen={isOpenGrid} />
                        {isOpenGrid && (<CardContent>
                            <div className="flex justify-start space-x-4  mt-2 pr-4">
                                <Button type="submit" className='btn-red' onClick={handleRedirect}>
                                    New Brand
                                </Button>
                            </div>
                            <div className="w-full mt-3"> {/* TailwindCSS classes for height and width */}
                                <div className="h-full w-full"> {/* Container for DataGrid */}
                                    <div>
                                        <ThemeProvider theme={theme}>
                                            <DataGrid autoHeight
                                                // disableColumnFilter
                                                // disableColumnSelector
                                                // disableDensitySelector
                                                checkboxSelection
                                                onRowSelectionModelChange={(newRowSelectionModel) => {
                                                    setRowSelectionModel(newRowSelectionModel);
                                                }}
                                                rowSelectionModel={rowSelectionModel}
                                                getRowId={(row) => row.brand_id}
                                                rowHeight={35}
                                                rows={rows}
                                                columns={columns}
                                                initialState={{
                                                    pagination: {
                                                        paginationModel: { pageSize: 15, page: 0 },
                                                    },
                                                }}

                                                slots={{ toolbar: GridToolbar }}
                                                slotProps={{
                                                    toolbar: {
                                                        showQuickFilter: true,
                                                    },
                                                }
                                                }
                                            />
                                        </ThemeProvider>
                                    </div>
                                </div>
                            </div>

                        </CardContent>)}

                    </Card>
                </div>
            </div>
        </>
    );
};

export default Brand;